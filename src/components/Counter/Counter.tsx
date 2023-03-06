import "./Counter.css"

interface CounterProps {
    count: number,
}

function Counter({ count } : CounterProps)
{
    return (
        <div className="counter">
            <p className="counter__text counter__count">{count}</p>
            <p className="counter__text counter__message">movies found</p>
        </div>
    );
}

export default Counter;