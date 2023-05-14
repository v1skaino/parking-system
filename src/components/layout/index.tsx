import { signOut } from "next-auth/react";
import Link from "next/link";
import { ReactNode } from "react";
import { FiLogOut } from "react-icons/fi";
import styles from "./styles.module.scss";

type TemplateProps = {
  children: ReactNode;
};

export const Grid = ({ children }: TemplateProps) => {
  return (
    <section className={styles.grid}>
      <nav className={styles.navBar}>
        <div className={styles.navContent}>
          <h1>
            <Link href="/dashboard">
              Parking System<span>.</span>
            </Link>
          </h1>
          <div className={styles.links}>
            <Link href="/vehicles">Veículos</Link>
            <Link href="/check-in">Check-in</Link>
            <Link href="/check-out">Check-out</Link>
            <Link href="/dashboard">Financeiro</Link>
            <FiLogOut
              onClick={() => signOut()}
              className={styles.logOut}
              size={18}
            />
          </div>
        </div>
      </nav>
      <main className={styles.content}>{children}</main>
    </section>
  );
};
