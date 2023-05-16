import { SvgCar } from "@/assets/car";
import { SvgMotorcycle } from "@/assets/motorcycle";
import { Grid } from "@/components/layout";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function AdicionarVeiculo() {
  const [type, setType] = useState<string>("");
  const [label, setLabel] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [owner, setOwner] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const router = useRouter();

  function changeBorderColor(selectedType: string) {
    if (selectedType != type) return "2px solid #373742";
    return "2px solid #ed0020";
  }

  function handleSubmit() {}

  function cancel() {
    router.push("/vehicles");
  }

  return (
    <Grid>
      <section className={styles.main}>
        <h1>Adicionar Cliente</h1>
        <section className={styles.cards}>
          <article
            onClick={() => setType("car")}
            className={styles.card}
            style={{
              border: changeBorderColor("car"),
            }}
          >
            <SvgCar color=" #ed0020" height="150px" width="150px" />
          </article>
          <article
            onClick={() => setType("motorcycle")}
            className={styles.card}
            style={{
              border: changeBorderColor("motorcycle"),
            }}
          >
            <SvgMotorcycle color=" #ed0020" height="150px" width="150px" />
          </article>
        </section>
        <div className={styles.inputArea}>
          <label>Nome Cliente:</label>
          <input
            onChange={(ev) => setOwner(ev.target.value)}
            placeholder="ex: Marcos Manuel"
          />
        </div>
        <div className={styles.inputArea}>
          <label>Marca:</label>
          <input
            onChange={(ev) => setBrand(ev.target.value)}
            placeholder="ex: Ford - Honda"
          />
        </div>
        <div className={styles.inputArea}>
          <label>Modelo:</label>
          <input
            onChange={(ev) => setModel(ev.target.value)}
            placeholder="ex: Fiat 96"
          />
        </div>
        <section className={styles.formArea}>
          <div className={styles.inputArea} style={{ width: "50%" }}>
            <label>Placa:</label>
            <input
              onChange={(ev) => setLabel(ev.target.value)}
              placeholder="ex: AAA-9999"
            />
          </div>
          <div className={styles.inputArea} style={{ width: "50%" }}>
            <label>Cor:</label>
            <input
              onChange={(ev) => setColor(ev.target.value)}
              placeholder="ex: Preto"
            />
          </div>
        </section>
        <section className={styles.footer}>
          <button onClick={cancel} className={styles.cancel}>
            Cancelar
          </button>
          <button onClick={handleSubmit} className={styles.submit}>
            Gravar
          </button>
        </section>
      </section>
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
