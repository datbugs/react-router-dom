import React, {useState, useEffect} from 'react'
import { Link} from 'react-router-dom'

export type User ={
    id: number,
    phone: string,
    email: string,
    username: string,
    website: string
}

function Users(){
    const [state, setState] = useState<User[]>([])
    const fetchData = async ()=>{
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await data.json()
        console.log(users)
        setState(users)
    }
    useEffect(() => {
            fetchData()
    }, [])
    return (
        <>
        <div>
            Users Page
        </div>
        {state.map(user => <div><Link to = {`/users/${user.id}`} key={user.id}>{user.username}</Link></div>)}
        </>
    )
}

export default Users
