import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name:string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // completed!
    const [error, setError] = useState<string>('')// completed!

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // completed!
        error !== '' && setError('')
        setName(e.currentTarget.value) // completed!
    }
    const addUser = (name:string) => {
        if (name){
            alert(`Hello, ${name}!`) // completed!
            addUserCallback(name)
            setName('')
        }else {
            console.log('тут пусто')
            setError('Поле не должно быть пустым!')
        }

    }

    const totalUsers = users.length // completed!

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
