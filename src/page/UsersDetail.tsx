
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import {User} from './Users';


function UsersDetail  ()  {
    const {id} = useParams()
    const [state, setState] = useState< User |null>(null)
    const fetchData = async ()=>{
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const users = await data.json()
        console.log(users)
        setState(users)
    }
    useEffect(() => {
            fetchData()
    }, [])
    return (
        <>
            <div>UsersDetail Page</div>
            {state && <> 
                <div>{state.email}</div>
                <div>{state.phone}</div>
                <div>{state.website}</div>

            </>}
            

        </>
    )
}

export default UsersDetail
