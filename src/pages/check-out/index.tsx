import { Grid } from "@/components/layout";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

import { ActionCardComponent } from "@/components/actionCard";
import { handleAlert } from "@/components/alert";
import { db } from "@/services/firebaseConnection";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface DataType {
  id: string;
  label: string;
  color: string;
  owner: string;
  model: string;
  brand: string;
  type: string;
  user: string;
}

type Props = {
  user: {
    username: string;
    email: string;
  };
};

export default function Checkout({ user }: Props) {
  const [clients, setClients] = useState<DataType[]>([]);

  async function onCardClick(item: DataType) {
    let result = await handleAlert({
      icon: "question",
      cancelButtonLabel: "Cancelar",
      confirmButtonLabel: "Confirmar",
      title: "Tem certeza que deseja realizar o checkout?",
    });

    if (!result) return;

    //Lógica para realizar checkout no banco
  }

  useEffect(() => {
    async function loadTasks() {
      const taskRef = collection(db, "clients");
      const q = query(taskRef, where("user", "==", user?.email));

      onSnapshot(q, (snapshot) => {
        let list = [] as DataType[];

        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            brand: doc.data().brand,
            color: doc.data().color,
            label: doc.data().label,
            model: doc.data().model,
            owner: doc.data().owner,
            type: doc.data().type,
            user: doc.data().user,
          });
        });

        setClients(list);
      });
    }

    loadTasks();
  }, [user?.email]);

  return (
    <Grid>
      <Head>
        <title>Checkout</title>
      </Head>
      <main className={styles.mainContent}>
        <div className={styles.header}>
          {clients.length > 0 ? (
            <h1>
              Veículos Estacionados: <span>{clients.length}</span>
            </h1>
          ) : (
            <h1>Nenhum veículo disponível</h1>
          )}
        </div>
        <div className={styles.cardLista}>
          {Array.isArray(clients) &&
            clients.map((client) => {
              return (
                <ActionCardComponent
                  onClick={() => onCardClick(client)}
                  key={client.id}
                  data={client}
                  actionType="checkout"
                />
              );
            })}
        </div>
      </main>
    </Grid>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session?.user)
    return { redirect: { destination: "/", permanent: false } };

  return {
    props: {
      user: {
        username: session?.user?.name,
        email: session?.user?.email,
      },
    },
  };
};
