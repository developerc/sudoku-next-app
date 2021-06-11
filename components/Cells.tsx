import React, { FunctionComponent } from 'react';
import styles from '../styles/Sudoku.module.css'

type InputProps = {
    dig: string;
    marg: string;
}

export const Cell: FunctionComponent<InputProps> = ({dig, marg}) => {
if(marg === 'cell'){
    return (
        <div  className = {styles.cell}>
            <label>{dig}</label>
        </div>
    );
}
if(marg === 'cell_l'){
    return (
        <div  className = {styles.cell_l}>
            <label>{dig}</label>
        </div>
    );
}
if(marg === 'cell_l_t'){
    return (
        <div  className = {styles.cell_l_t}>
            <label>{dig}</label>
        </div>
    );
}
if(marg === 'cell_t'){
    return (
        <div  className = {styles.cell_t}>
            <label>{dig}</label>
        </div>
    );
}
}