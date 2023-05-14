import { CardComponent } from "@/components/card";
import { Grid } from "@/components/layout";
import Head from "next/head";
import styles from "./styles.module.scss";
type DataType = {
  label: string;
  color: string;
  owner: string;
  model: string;
  brand: string;
};

export default function Vehicles() {
  const cardMock: DataType = {
    label: "GGW4042",
    brand: "Ford",
    color: "Prata",
    model: "Ford Ka",
    owner: "Jose Augusto Silva",
  };
  return (
    <Grid>
      <Head>
        <title>Veículos</title>
      </Head>
      <main className={styles.mainContent}>
        <div className={styles.header}>
          <h1>
            Clientes: <span>10</span>
          </h1>
          <button>+</button>
        </div>
        <div className={styles.cardLista}>
          <CardComponent data={cardMock} vehicleType="car" />
        </div>
      </main>
    </Grid>
  );
}
