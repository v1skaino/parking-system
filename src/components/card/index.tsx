import { SvgCar } from "@/assets/car";
import { SvgMotorcycle } from "@/assets/motorcycle";
import styles from "./styles.module.scss";

type Data = {
  id: string;
  label: string;
  color: string;
  owner: string;
  model: string;
  brand: string;
  type: string;
  user: string;
};
interface Props {
  data: Data;
}

export function CardComponent({ data }: Props) {
  return (
    <article className={styles.card}>
      {data?.type == "car" ? (
        <SvgCar color=" #ed0020" height="150px" width="150px" />
      ) : (
        <SvgMotorcycle color=" #ed0020" height="150px" width="150px" />
      )}
      <p>
        Modelo: <span>{data?.model}</span>
      </p>
      <p>
        Marca: <span>{data?.brand}</span>
      </p>
      <p>
        Proprietario: <span>{data?.owner}</span>
      </p>
      <p>
        Placa: <span>{data?.label}</span>
      </p>
      <p>
        Cor: <span>{data?.color}</span>
      </p>
    </article>
  );
}
