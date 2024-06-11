import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import styles from './Counter.module.css';
//Defining the Counter Component
export function Counter(){
    const count= useSelector(state => state.counter.value);
    const dispatch= useDispatch();

    return(
        <div>
            <div className={styles.row}>
                <button 
                className={styles.button}
                aria-label= "Increment value"
                onClick={()=> dispatch(increment())}>
                    Increment
                </button>
                <span className={styles.value}>{count}</span>
                <button 
                className={styles.button}
                aria-label= "Decrement value"
                onClick={()=> dispatch(decrement())}>
                    Decrement
                </button>
            </div>
        </div>
    )
}