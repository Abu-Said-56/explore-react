import { useState } from "react"
import './User.css'
export default function Team(){
    
    const [count,setCount] = useState(11);
    const addCount = () =>{
       const newCount = count + 1;
       setCount(newCount); 
    }
    const RemoveCount = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }
    return(
        <div className="user">
            <h2>Player : {count}</h2>
            <button onClick={addCount}>AddCount</button>
            <button onClick={RemoveCount}>RemoveCount</button>
        </div>
    )
}