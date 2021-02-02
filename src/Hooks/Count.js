import React, { useState } from 'react';

function Counter({initialCount}) {
    const [count, setCount] = useState(0);
    return (
        <> 
        Total : {count}
        <button onClick={() => setCount(0)}> Réinitialiser</button>
        <br></br>
        <button onClick={() => setCount(prevCount => prevCount - 1)}> - </button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}> + </button>
        </>
    )
}

export default Counter