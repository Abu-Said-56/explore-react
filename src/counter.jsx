import { useState } from "react"

export default function Counter(){
    const[count,setCount] = useState(0);

    const handleAdd = () =>{
       const newCount = count + 1;
       setCount(newCount);
    }
    const reduced = () =>{
        const newcount =  count - 1;
        setCount(newcount);
    }
    return(
        <div style={{border:'3px solid tomato'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add Count</button> <br />
            <button onClick={reduced}>Reduce</button>
        </div>
    )
}