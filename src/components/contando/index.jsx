import { useEffect, useState } from "react";

const Contando = () => {
    const [count, setCount] = useState(0);




    const add = () => {
        setCount(count + 1);
    };

    const subtract = () => {
        setCount(count - 1);
    };



    return (
        <div>
            <p>{count}</p>
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
        </div>
    );
};

export default Contando;
