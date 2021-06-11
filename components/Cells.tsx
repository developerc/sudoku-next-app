import React, { FunctionComponent } from 'react';
import styles from '../styles/Sudoku.module.css'


export const Cell: FunctionComponent = () => {

    return (
        <div className = {styles.cell}>
            <label>1</label>
        </div>
    );
}