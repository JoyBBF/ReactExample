import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Item(){
    const [count, setCount] = useState(0);

    return <>
    <p>{count}</p>
    <button onClick={ () => setCount(count + 1)}>
        +
    </button>
    </>
}

ReactDOM.render(
    <h1>Hello World</h1>,
    document.getElementById('app')
);