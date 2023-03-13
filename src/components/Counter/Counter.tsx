import React from "react";
import "./Counter.css"

// This code is for future refactoring on functional components.

// import { FC, useCallback, useState } from "react";

// const Counter : FC<ICounterProps> = ({initialValue}) => {
//     const [count, setCount] = useState<number>(initialValue);

//     const increment = useCallback(() => setCount(count + 1), [count])
//     const decrement = useCallback(() => setCount(count - 1), [count])
 
//     return (
//         <div className="counter">
//             <p className="counter__text counter__count">{count}</p>
//             <p className="counter__text counter__message">movies found</p>
//             <button onClick={increment} className="button-increment">
//             increment   
//             </button>
//             <button onClick={decrement} className="button-decrement">
//             decrement
//             </button>
//         </div>
//     );
// }

// Code to follow task restrictions.
interface ICounterProps {
    initialValue: number;
  }
  
  interface ICounterState {
    count: number;
  }
  
  class Counter extends React.Component<ICounterProps, ICounterState> {
    constructor(props: ICounterProps) {
      super(props);
  
      this.state = {
        count: props.initialValue,
      };
  
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
    }
  
    increment() {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }
  
    decrement() {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }
    
    render() {
      return React.createElement(
        'div',
        { className: 'counter' },
        React.createElement(
          'p',
          { className: 'counter__text counter__count' },
          this.state.count
        ),
        React.createElement(
          'p',
          { className: 'counter__text counter__message' },
          'movies found'
        ),
        React.createElement(
          'button',
          { onClick: this.increment, className: 'button-increment' },
          'increment'
        ),
        React.createElement(
          'button',
          { onClick: this.decrement, className: 'button-decrement' },
          'decrement'
        )
      );
    }
  }

export default Counter;