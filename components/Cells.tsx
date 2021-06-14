import React, { FunctionComponent, useEffect } from 'react';
import styles from '../styles/Sudoku.module.css'

let cellChecked: boolean = false;
let idCheckedCell: string = '';
let digArr: string[];
let dataJson: any = null;

type InputProps = {
    dig: string[];
    marg: string;
    idVal: string;
    data: any;
}

const ClickHandler = (idVal) => {
    if(!cellChecked){
        let cellDigit = document.getElementById(idVal).getElementsByTagName('label')[0].innerText;
        //console.log('digit in click  Cell =' + cellDigit);
        if(cellDigit === ''){
            (document.getElementById(idVal) as HTMLInputElement).style.backgroundColor = 'white';
            cellChecked = true;
            idCheckedCell = idVal;
    }
    }
}

const MouseOverHandler = (idVal) => {
    //console.log('Mouse over id = ' + idVal);
    if(!cellChecked){
        (document.getElementById(idVal) as HTMLInputElement).style.backgroundColor = 'rgb(162, 188, 243)';
    }
}

const MouseOutHandler = (idVal) => {
    //console.log('Mouse out id = ' + idVal);
    if(!cellChecked){
        (document.getElementById(idVal) as HTMLInputElement).style.backgroundColor = 'rgb(202, 237, 240)';
    }
}

const KeyUpHandler = (keyPressed, data) => {
    let rightAnswer: string;
    //console.log('key pressed: ' + keyPressed);
    if(keyPressed === 'Escape' && cellChecked === true){
        (document.getElementById(idCheckedCell) as HTMLInputElement).style.backgroundColor = 'rgb(202, 237, 240)';
        cellChecked = false;
        idCheckedCell = '';
    }
    if(keyPressed === '1' || keyPressed === '2' || keyPressed === '3' || keyPressed === '4' || keyPressed === '5' || 
       keyPressed === '6' || keyPressed === '7' || keyPressed === '8' || keyPressed === '9'){
        rightAnswer = getRightAnswer(dataJson, idCheckedCell);
        //console.log('right answer: ' + rightAnswer);
        if(keyPressed === rightAnswer){
            (document.getElementById(idCheckedCell).getElementsByTagName('label')[0]).innerText = keyPressed;
        } else {
            alert('Введена неверная цифра!');
        }
        (document.getElementById(idCheckedCell) as HTMLInputElement).style.backgroundColor = 'rgb(202, 237, 240)';
        
        cellChecked = false;
        idCheckedCell = '';
        
    }
}

const getRightAnswer =(data, idVal) => {
    let dig: string;
    const cellsArray = data.cells;
    
    for(let i = 0; i < cellsArray.length; i++){
      if(cellsArray[i].id === idVal){
        dig = cellsArray[i].solution;
        break;
      }
    }
    
    return dig;
    }


export const Cell: FunctionComponent<InputProps> = ({dig, marg, idVal, data}) => {
useEffect(() => {
    onkeyup = (e) =>{
        //console.log('onkeyup: ' + e.key);
        KeyUpHandler(e.key, data);
    }
}, []);

    digArr = dig;
    dataJson = data;

if(marg === 'cell'){
    return (
        <div  className = {styles.cell} id = {idVal} onClick = {() => ClickHandler(idVal)} 
        onMouseOver = {() => MouseOverHandler(idVal)} onMouseOut = {() => MouseOutHandler(idVal)} >
            <label>{dig[0]}</label>
        </div>
    );
}
if(marg === 'cell_l'){
    return (
        <div  className = {styles.cell_l} id = {idVal} onClick = {() => ClickHandler(idVal)} 
        onMouseOver = {() => MouseOverHandler(idVal)} onMouseOut = {() => MouseOutHandler(idVal)}>
            <label>{dig[0]}</label>
        </div>
    );
}
if(marg === 'cell_l_t'){
    return (
        <div  className = {styles.cell_l_t} id = {idVal} onClick = {() => ClickHandler(idVal)} 
        onMouseOver = {() => MouseOverHandler(idVal)} onMouseOut = {() => MouseOutHandler(idVal)}>
            <label>{dig[0]}</label>
        </div>
    );
}
if(marg === 'cell_t'){
    return (
        <div  className = {styles.cell_t} id = {idVal} onClick = {() => ClickHandler(idVal)} 
        onMouseOver = {() => MouseOverHandler(idVal)} onMouseOut = {() => MouseOutHandler(idVal)}>
            <label>{dig[0]}</label>
        </div>
    );
}
}