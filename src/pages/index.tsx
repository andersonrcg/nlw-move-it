import Head from 'next/head';
import styles from "../styles/pages/Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <img src="/logo-full-white.svg" alt="Move.it" />
          <h1>Bem-vindo</h1>

          <div className={styles.githubButton}>
            <img src="/icons/github.svg" alt="Github" />
            <span>
              Faça login com seu Github<br /> para começar
          </span>
          </div>

          <div className={styles.loginForm}>
            <input type="text" className={styles.loginInput} placeholder="Digite seu username" />
            <a href="/home" className={styles.loginButton}>
              <img src="/icons/arrow-right.svg" alt="->" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}