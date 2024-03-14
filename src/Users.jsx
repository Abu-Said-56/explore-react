import { useEffect, useState } from "react"
import User from "./User";

export default function Users(){
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data =>setUsers(data))
    },[])
    return(
        <div style={{border:'3px solid blue'}}>
            <h3>user length:{users.length}</h3>
            
            {
                users.map(user=> <User profile={user}></User>)
            }
        </div>
    )
}