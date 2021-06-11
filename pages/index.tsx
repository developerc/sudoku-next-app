import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Sudoku.module.css'
import {Cell} from '../components/Cells';
import { VerticalPart } from '../components/VerticalParts';

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
        
        <div className = {styles.verticalpart}></div>
        <div className = {styles.verticalpart}>
          <div className = {styles.line}>
          <Cell dig = '1' marg = 'cell'></Cell>
          <Cell dig = '2' marg = 'cell_l'></Cell>
          <Cell dig = '3' marg = 'cell_l'></Cell>
          <Cell dig = '7' marg = 'cell'></Cell>
          <Cell dig = '8' marg = 'cell_l'></Cell>
          <Cell dig = '9' marg = 'cell_l'></Cell>
          <Cell dig = '7' marg = 'cell'></Cell>
          <Cell dig = '8' marg = 'cell_l'></Cell>
          <Cell dig = '9' marg = 'cell_l'></Cell>
          </div>
          <div className = {styles.line}>
          <Cell dig = '4' marg = 'cell_t'></Cell>
          <Cell dig = '5' marg = 'cell_l_t'></Cell>
          <Cell dig = '6' marg = 'cell_l_t'></Cell>
          <Cell dig = '4' marg = 'cell_t'></Cell>
          <Cell dig = '5' marg = 'cell_l_t'></Cell>
          <Cell dig = '6' marg = 'cell_l_t'></Cell>
          <Cell dig = '4' marg = 'cell_t'></Cell>
          <Cell dig = '5' marg = 'cell_l_t'></Cell>
          <Cell dig = '6' marg = 'cell_l_t'></Cell>
          </div>
          <div className = {styles.line}>
          <Cell dig = '4' marg = 'cell_t'></Cell>
          <Cell dig = '5' marg = 'cell_l_t'></Cell>
          <Cell dig = '6' marg = 'cell_l_t'></Cell>
          <Cell dig = '4' marg = 'cell_t'></Cell>
          <Cell dig = '5' marg = 'cell_l_t'></Cell>
          <Cell dig = '6' marg = 'cell_l_t'></Cell>
          <Cell dig = '4' marg = 'cell_t'></Cell>
          <Cell dig = '5' marg = 'cell_l_t'></Cell>
          <Cell dig = '6' marg = 'cell_l_t'></Cell>
          </div>
          <div className = {styles.line}>
          <Cell dig = '4' marg = 'cell'></Cell>
          <Cell dig = '5' marg = 'cell_l'></Cell>
          <Cell dig = '6' marg = 'cell_l'></Cell>
          <Cell dig = '4' marg = 'cell'></Cell>
          <Cell dig = '5' marg = 'cell_l'></Cell>
          <Cell dig = '6' marg = 'cell_l'></Cell>
          <Cell dig = '4' marg = 'cell'></Cell>
          <Cell dig = '5' marg = 'cell_l'></Cell>
          <Cell dig = '6' marg = 'cell_l'></Cell>
          </div>
          <div className = {styles.line}>
          <Cell dig = '4' marg = 'cell_t'></Cell>
          <Cell dig = '5' marg = 'cell_l_t'></Cell>
          <Cell dig = '6' marg = 'cell_l_t'></Cell>
          <Cell dig = '4' marg = 'cell_t'></Cell>
          <Cell dig = '5' marg = 'cell_l_t'></Cell>
          <Cell dig = '6' marg = 'cell_l_t'></Cell>
          <Cell dig = '4' marg = 'cell_t'></Cell>
          <Cell dig = '5' marg = 'cell_l_t'></Cell>
          <Cell dig = '6' marg = 'cell_l_t'></Cell>
          </div>
          <div className = {styles.line}>
          <Cell dig = '4' marg = 'cell_t'></Cell>
          <Cell dig = '5' marg = 'cell_l_t'></Cell>
          <Cell dig = '6' marg = 'cell_l_t'></Cell>
          <Cell dig = '4' marg = 'cell_t'></Cell>
          <Cell dig = '5' marg = 'cell_l_t'></Cell>
          <Cell dig = '6' marg = 'cell_l_t'></Cell>
          <Cell dig = '4' marg = 'cell_t'></Cell>
          <Cell dig = '5' marg = 'cell_l_t'></Cell>
          <Cell dig = '6' marg = 'cell_l_t'></Cell>
          </div>
          <div className = {styles.line}>
          <Cell dig = '4' marg = 'cell'></Cell>
          <Cell dig = '5' marg = 'cell_l'></Cell>
          <Cell dig = '6' marg = 'cell_l'></Cell>
          <Cell dig = '4' marg = 'cell'></Cell>
          <Cell dig = '5' marg = 'cell_l'></Cell>
          <Cell dig = '6' marg = 'cell_l'></Cell>
          <Cell dig = '4' marg = 'cell'></Cell>
          <Cell dig = '5' marg = 'cell_l'></Cell>
          <Cell dig = '6' marg = 'cell_l'></Cell>
          </div>
          <div className = {styles.line}>
          <Cell dig = '4' marg = 'cell_t'></Cell>
          <Cell dig = '5' marg = 'cell_l_t'></Cell>
          <Cell dig = ' ' marg = 'cell_l_t'></Cell>
          <Cell dig = '4' marg = 'cell_t'></Cell>
          <Cell dig = '5' marg = 'cell_l_t'></Cell>
          <Cell dig = '6' marg = 'cell_l_t'></Cell>
          <Cell dig = '4' marg = 'cell_t'></Cell>
          <Cell dig = '5' marg = 'cell_l_t'></Cell>
          <Cell dig = '6' marg = 'cell_l_t'></Cell>
          </div>
          <div className = {styles.line}>
          <Cell dig = '4' marg = 'cell_t'></Cell>
          <Cell dig = '5' marg = 'cell_l_t'></Cell>
          <Cell dig = '6' marg = 'cell_l_t'></Cell>
          <Cell dig = '4' marg = 'cell_t'></Cell>
          <Cell dig = '5' marg = 'cell_l_t'></Cell>
          <Cell dig = '6' marg = 'cell_l_t'></Cell>
          <Cell dig = '4' marg = 'cell_t'></Cell>
          <Cell dig = '5' marg = 'cell_l_t'></Cell>
          <Cell dig = '6' marg = 'cell_l_t'></Cell>
          </div>
          
        </div>
        <div className = {styles.verticalpart}></div>
        
        
      </main>

      <footer className={styles.footer}>
        <p>Приложение "Игра Судоку"</p>
      </footer>
    </div>
  )
}
