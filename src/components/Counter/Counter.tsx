import "./Counter.scss"

import { ICounterProps } from "./CounterInterfaces";
import { FC, useCallback, useState } from "react";

const Counter : FC<ICounterProps> = ({initialValue}) => {
    const [count, setCount] = useState<number>(initialValue);

    const increment = useCallback(() => setCount(count + 1), [count])
    const decrement = useCallback(() => setCount(count - 1), [count])
 
    return (
        <div className="counter">
            <p className="counter__text counter__count">{count}</p>
            <p className="counter__text counter__message">movies found</p>
            <button onClick={increment} className="button-increment">
            increment   
            </button>
            <button onClick={decrement} className="button-decrement">
            decrement
            </button> 
        </div>
    );
}

export default Counter;