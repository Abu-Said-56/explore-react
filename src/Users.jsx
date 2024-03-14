import { useEffect, useState } from "react"
import User from "./User";
import './User.css'

export default function Users(){
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data =>setUsers(data))
    },[])
    return(
        <div className="user">
            <h3>user length:{users.length}</h3>
            
            {
                users.map(user=> <User profile={user}></User>)
            }
        </div>
    )
}