import { Grid } from "@/components/layout";
import { DataTable } from "@/components/table";
import { functions } from "@/utils/functions";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import Head from "next/head";
import { Bar } from "react-chartjs-2";
import styles from "./styles.module.scss";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Dashboard() {
  const { generateGreetings } = functions;

  const currencyOptions = {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  };

  const header = [
    "Marca",
    "Data",
    "Hora Entrada",
    "Hora Saída",
    "Valor",
    "Tipo Cobrança",
    "Tipo Veículo",
  ];

  const body = [
    {
      id: "1",
      brand: "Range Rover",
      data: "09/10/2001",
      horaEntrada: "09:10",
      horaSaida: "10:10",
      valor: "R$2,00",
      tipoCobranca: "Valor hora",
      tipoVeiculo: "Carro",
    },
    {
      id: "2",
      brand: "Ford Ka",
      data: "09/10/2001",
      horaEntrada: "09:10",
      horaSaida: "10:10",
      valor: "R$2,00",
      tipoCobranca: "Valor hora",
      tipoVeiculo: "Carro",
    },
    {
      id: "3",
      brand: "Fiat Mobi",
      data: "09/10/2001",
      horaEntrada: "09:10",
      horaSaida: "10:10",
      valor: "R$2,00",
      tipoCobranca: "Valor hora",
      tipoVeiculo: "Carro",
    },
  ];

  const formatNumber = new Intl.NumberFormat("pt-BR", currencyOptions);

  const data = {
    labels: ["Fev", "March", "April", "Fev", "March", "April"],
    datasets: [
      {
        label: "",
        data: [1000, 2000, 3000, 1000, 2000, 3000],
        backgroundColor: "rgba(237,0,32,0.7)",
        color: "#fff",
      },
    ],
  };

  const options: ChartOptions = {
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <Grid>
      <Head>
        <title>Financeiro</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.leftSide}>
          <h1>{generateGreetings()}, Lucas!</h1>
          <p>
            Aqui no painel financeiro você pode configurar valores e acompanhar
            o faturamento da sua empresa!
          </p>
          <div className={styles.chart}>
            <h2>Faturamento Anual</h2>
            <Bar data={data} options={options}></Bar>
          </div>
        </section>
        <section className={styles.rightSide}>
          <h2>Movimentações</h2>
          <DataTable header={header}>
            {body.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.brand}</td>
                  <td>{data.data}</td>
                  <td>{data.horaEntrada}</td>
                  <td>{data.horaSaida}</td>
                  <td>{data.valor}</td>
                  <td>{data.tipoCobranca}</td>
                  <td>{data.tipoVeiculo}</td>
                </tr>
              );
            })}
          </DataTable>
          <section className={styles.pagination}>
            <div className={styles.buttons}>
              <button>&#xab;</button>
              <button>&#x2039;</button>
              <p>Página 1 - 10</p>
              <button>&#x203A;</button>
              <button>&#xbb;</button>
            </div>
          </section>
          <section className={styles.changeTaxes}>
            <form>
              <label>Faturamento Total</label>
              <input readOnly value="R$ 100.000.000,00" />
            </form>
            <form>
              <label>Tarifa diária | Motos</label>
              <input readOnly value="R$ 0,00" />
              <button>Editar</button>
            </form>
            <form>
              <label>Tarifa diária | Carros</label>
              <input value="R$ 0,00" />
              <button>Editar</button>
            </form>
          </section>
        </section>
      </main>
    </Grid>
  );
}
