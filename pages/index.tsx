import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Sudoku.module.css'
import {Cell} from '../components/Cells';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sudoku application</title>
        <meta name="description" content="Sudoku app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Судоку
        </h1>
        <Cell></Cell>
        
      </main>

      <footer className={styles.footer}>
        <p>Приложение "Игра Судоку"</p>
      </footer>
    </div>
  )
}
