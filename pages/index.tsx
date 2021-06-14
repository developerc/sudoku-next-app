import Head from 'next/head'
import styles from '../styles/Sudoku.module.css'
import {Cell} from '../components/Cells';
import fs from 'fs/promises';
import path from 'path';

//Getting array of digits from JSON file
export async function getStaticProps(){
  const filePath = path.join(process.cwd(), 'data', 'basa.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString('utf8'));
    
  return {props: {
    cells: data.cells
  }
};
}

//Getting digit from array
const getDigit =(data, idVal) => {
let digArr: string[] = [];
const cellsArray = data.cells;

for(let i = 0; i < cellsArray.length; i++){
  if(cellsArray[i].id === idVal){
    digArr.push(cellsArray[i].dig);
    digArr.push(cellsArray[i].solution);
    //console.log('digArr = ' + digArr);
    break;
  }
}

return digArr;
}

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sudoku application</title>
        <meta name="description" content="Sudoku app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          数独 Судоку
        </h1> 
        
        <div className = {styles.verticalpart}></div>
        <div className = {styles.verticalpart}>
          <div className = {styles.line}>
          <Cell dig = {getDigit(props, 'cell00')} marg = 'cell'   idVal = 'cell00' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell01')} marg = 'cell_l' idVal = 'cell01' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell02')} marg = 'cell_l' idVal = 'cell02' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell03')} marg = 'cell'   idVal = 'cell03' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell04')} marg = 'cell_l' idVal = 'cell04' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell05')} marg = 'cell_l' idVal = 'cell05' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell06')} marg = 'cell'   idVal = 'cell06' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell07')} marg = 'cell_l' idVal = 'cell07' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell08')} marg = 'cell_l' idVal = 'cell08' data = {props}></Cell>
          </div>
          <div className = {styles.line}>
          <Cell dig = {getDigit(props, 'cell10')} marg = 'cell_t'   idVal = 'cell10' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell11')} marg = 'cell_l_t' idVal = 'cell11' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell12')} marg = 'cell_l_t' idVal = 'cell12' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell13')} marg = 'cell_t'   idVal = 'cell13' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell14')} marg = 'cell_l_t' idVal = 'cell14' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell15')} marg = 'cell_l_t' idVal = 'cell15' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell16')} marg = 'cell_t'   idVal = 'cell16' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell17')} marg = 'cell_l_t' idVal = 'cell17' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell18')} marg = 'cell_l_t' idVal = 'cell18' data = {props}></Cell>
          </div>
          <div className = {styles.line}>
          <Cell dig = {getDigit(props, 'cell20')} marg = 'cell_t'   idVal = 'cell20' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell21')} marg = 'cell_l_t' idVal = 'cell21' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell22')} marg = 'cell_l_t' idVal = 'cell22' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell23')} marg = 'cell_t'   idVal = 'cell23' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell24')} marg = 'cell_l_t' idVal = 'cell24' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell25')} marg = 'cell_l_t' idVal = 'cell25' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell26')} marg = 'cell_t'   idVal = 'cell26' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell27')} marg = 'cell_l_t' idVal = 'cell27' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell28')} marg = 'cell_l_t' idVal = 'cell28' data = {props}></Cell>
          </div>
          <div className = {styles.line}>
          <Cell dig = {getDigit(props, 'cell30')} marg = 'cell'   idVal = 'cell30' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell31')} marg = 'cell_l' idVal = 'cell31' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell32')} marg = 'cell_l' idVal = 'cell32' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell33')} marg = 'cell'   idVal = 'cell33' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell34')} marg = 'cell_l' idVal = 'cell34' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell35')} marg = 'cell_l' idVal = 'cell35' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell36')} marg = 'cell'   idVal = 'cell36' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell37')} marg = 'cell_l' idVal = 'cell37' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell38')} marg = 'cell_l' idVal = 'cell38' data = {props}></Cell>
          </div>
          <div className = {styles.line}>
          <Cell dig = {getDigit(props, 'cell40')} marg = 'cell_t'   idVal = 'cell40' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell41')} marg = 'cell_l_t' idVal = 'cell41' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell42')} marg = 'cell_l_t' idVal = 'cell42' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell43')} marg = 'cell_t'   idVal = 'cell43' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell44')} marg = 'cell_l_t' idVal = 'cell44' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell45')} marg = 'cell_l_t' idVal = 'cell45' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell46')} marg = 'cell_t'   idVal = 'cell46' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell47')} marg = 'cell_l_t' idVal = 'cell47' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell48')} marg = 'cell_l_t' idVal = 'cell48' data = {props}></Cell>
          </div>
          <div className = {styles.line}>
          <Cell dig = {getDigit(props, 'cell50')} marg = 'cell_t'   idVal = 'cell50' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell51')} marg = 'cell_l_t' idVal = 'cell51' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell52')} marg = 'cell_l_t' idVal = 'cell52' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell53')} marg = 'cell_t'   idVal = 'cell53' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell54')} marg = 'cell_l_t' idVal = 'cell54' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell55')} marg = 'cell_l_t' idVal = 'cell55' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell56')} marg = 'cell_t'   idVal = 'cell56' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell57')} marg = 'cell_l_t' idVal = 'cell57' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell58')} marg = 'cell_l_t' idVal = 'cell58' data = {props}></Cell>
          </div>
          <div className = {styles.line}>
          <Cell dig = {getDigit(props, 'cell60')} marg = 'cell'   idVal = 'cell60' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell61')} marg = 'cell_l' idVal = 'cell61' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell62')} marg = 'cell_l' idVal = 'cell62' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell63')} marg = 'cell'   idVal = 'cell63' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell64')} marg = 'cell_l' idVal = 'cell64' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell65')} marg = 'cell_l' idVal = 'cell65' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell66')} marg = 'cell'   idVal = 'cell66' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell67')} marg = 'cell_l' idVal = 'cell67' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell68')} marg = 'cell_l' idVal = 'cell68' data = {props}></Cell>
          </div>
          <div className = {styles.line}>
          <Cell dig = {getDigit(props, 'cell70')} marg = 'cell_t'   idVal = 'cell70' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell71')} marg = 'cell_l_t' idVal = 'cell71' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell72')} marg = 'cell_l_t' idVal = 'cell72' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell73')} marg = 'cell_t'   idVal = 'cell73' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell74')} marg = 'cell_l_t' idVal = 'cell74' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell75')} marg = 'cell_l_t' idVal = 'cell75' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell76')} marg = 'cell_t'   idVal = 'cell76' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell77')} marg = 'cell_l_t' idVal = 'cell77' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell78')} marg = 'cell_l_t' idVal = 'cell78' data = {props}></Cell>
          </div>
          <div className = {styles.line}>
          <Cell dig = {getDigit(props, 'cell80')} marg = 'cell_t'   idVal = 'cell80' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell81')} marg = 'cell_l_t' idVal = 'cell81' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell82')} marg = 'cell_l_t' idVal = 'cell82' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell83')} marg = 'cell_t'   idVal = 'cell83' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell84')} marg = 'cell_l_t' idVal = 'cell84' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell85')} marg = 'cell_l_t' idVal = 'cell85' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell86')} marg = 'cell_t'   idVal = 'cell86' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell87')} marg = 'cell_l_t' idVal = 'cell87' data = {props}></Cell>
          <Cell dig = {getDigit(props, 'cell88')} marg = 'cell_l_t' idVal = 'cell88' data = {props}></Cell>
          </div>
          
        </div>
        <div className = {styles.verticalpart}></div>
        
        
      </main>

      <footer className={styles.footer}>
        <p>Учебное приложение "Игра Судоку" выполнил Саперов Андрей. &nbsp;</p>
        <p>Применялись: TypeScript, React, HTML, CSS</p>
      </footer>
    </div>
  )
}
