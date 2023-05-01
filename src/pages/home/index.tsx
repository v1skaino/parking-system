import { DevCard } from "@/components/devCard";
import { functions } from "@/utils/functions";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { BiCopyright } from "react-icons/bi";
import grayCar from "../../assets/grayCar.png";
import purpleCar from "../../assets/purpleCar.png";
import yellowCar from "../../assets/yellowCar.png";
import styles from "./styles.module.scss";

export default function Home() {
  const email = "atendimento@seripark.com";

  const handleSendEmail = async () => {
    return (window.location.href = `mailto:${email}`);
  };

  const { smoothScroll } = functions;
  return (
    <>
      <Head>
        <title>Parking System</title>
      </Head>
      <main className={styles.main}>
        <nav className={styles.navBar}>
          <h1>Seripark</h1>
          <button>Acesse</button>
        </nav>
        <section className={styles.mainContent}>
          <h1>Parking System</h1>
          <h2>O sistema que seu estacionamento precisa!</h2>
          <button onClick={(e) => smoothScroll(e, "about")}>
            Saiba mais &#x2192;
          </button>
        </section>
      </main>
      <section id="about" className={styles.about}>
        <div className={styles.aboutText}>
          <h2>Quem somos?</h2>
          <p>
            Nós somos uma empresa com o objetivo de facilitar a vida do pequeno
            empreendedor, nosso software vai te ajudar a controlar seu fluxo de
            caixa e os clientes do seus estacionamento, abandone as planilhas e
            venha utilizar nosso sistema de maneira totalmente gratuita!
          </p>
        </div>
        <Image
          quality={100}
          src={yellowCar}
          alt="Audi amarelo"
          height={300}
          width={500}
        />
      </section>
      <section className={styles.whyUs}>
        <Image
          quality={100}
          src={purpleCar}
          alt="Carro Roxo"
          height={350}
          width={650}
        />
        <div className={styles.aboutText}>
          <h2>Porque nos escolher?</h2>
          <p>
            Nosso sistema foi feito totalmente pensado para atender as
            necessidades do seu negócio, com nossas constantes atualizações
            buscamos facilitar sua vida e possibilitar que você gerencie seu
            negócio de forma simples de qualquer lugar e a qualque hora.
          </p>
        </div>
      </section>
      <section id="about" className={styles.about}>
        <div className={styles.aboutText}>
          <h2>Precisa de algo a mais?</h2>
          <p>
            Nossa equipe esta pronta para atender o seu modelo de negócio! Entre
            em contato conosco e estaremos prontos para lançar as atualizações
            que você precisar, a satisfação do cliente é nosso maior objetivo!
          </p>
        </div>
        <Image
          quality={100}
          src={grayCar}
          alt="Carro cinza"
          height={300}
          width={500}
        />
      </section>
      <section className={styles.devsImage}>
        <div className={styles.devs}>
          <h2>
            Nosso time de <span>desenvolvedores!</span>
          </h2>
          <div className={styles.ourDevs}>
            <DevCard
              instagram="@lucsvi"
              linkedin="Lucas Viscaino"
              name="Lucas Viscaino"
            />
            <DevCard
              instagram="@henriqueGoes"
              linkedin="Henrique Góes"
              name="Henrique Góes"
            />
            <DevCard
              instagram="@ayumi"
              linkedin="Gabriela Ayumi"
              name="Gabriela Ayumi"
            />
            <DevCard
              instagram="@mah_duarte"
              linkedin="Marina Duarte"
              name="Marina Duarte"
            />
          </div>
        </div>
      </section>
      <section className={styles.contactUs}>
        <h2>Entre em contato com nosso time!</h2>
        <p>
          Envie um email para <span onClick={handleSendEmail}>{email}</span>
        </p>
        <Image
          src="/images/email.svg"
          alt="sendEmail"
          width={250}
          height={300}
        />
      </section>
      <section className={styles.footer}>
        <BiCopyright />
        <p>Copyright - Seripark - All rights reserved</p>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
