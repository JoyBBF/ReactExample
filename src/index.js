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
    const [word, setWord] = useState("");

    return (
    <div>
        <div><h1>React Example</h1></div>
        <div>
            <input type="text" onChange={ (e) => {handleChange(e.target.value); setWord(e.target.value);}} placeholder="Insert text"></input>
            <p>{word}</p>
        </div>
        <div id="rows">
            <h3>Changes:</h3>
        </div>
    </div>
    );
}

function handleChange(value){
    let div = document.createElement("div");
    div.innerHTML = value;
    document.getElementById("rows").appendChild(div);
}

ReactDOM.render(
    <Item />,
    document.getElementById('app')
);