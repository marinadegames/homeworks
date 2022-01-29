// imports
import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string
    name: string
}

// component
function HW3() {
    const [users, setUsers] = useState<UserType[]>([])

    console.log(users)

    const addUserCallback = (name: string) => {
        let newUser = {_id: v1(), name: name}
        let newUsers = [newUser, ...users]
        setUsers(newUsers)
    }

    return (
        <div>
            <b>homework 3</b>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <hr/>
        </div>
    )
}

export default HW3
