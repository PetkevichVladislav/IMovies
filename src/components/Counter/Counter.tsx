import "./Counter.scss"

import { ICounterProps } from "./CounterInterfaces";
import { FC } from "react";

const Counter : FC<ICounterProps> = ({count}) => {

    return (
        <div className="counter">
            <p className="counter__text counter__count">{count}</p>
            <p className="counter__text counter__message">movies found</p>
        </div>
    );
}

export default Counter;