import { SiInstagram, SiLinkedin } from "react-icons/si";
import styles from "./styles.module.scss";
interface Props {
  instagram: string;
  linkedin: string;
  name: string;
}

export function DevCard({ instagram, linkedin, name }: Props) {
  return (
    <article className={styles.content}>
      <h4 className={styles.mb4}>{name}</h4>
      <div className={styles.card}>
        <SiInstagram />
        {instagram}
      </div>
      <div className={styles.card}>
        <SiLinkedin />
        {linkedin}
      </div>
    </article>
  );
}
