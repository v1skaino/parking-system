import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface TableProps {
  header: string[];
  children: ReactNode;
}

export function DataTable({ children, header }: TableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {header.map((head) => {
            return <th key={head}>{head}</th>;
          })}
        </tr>
      </thead>
      <tbody className={styles.tbody}>{children}</tbody>
    </table>
  );
}
