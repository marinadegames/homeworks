import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // completed!
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // completed!
    addUser: (name:string) => void // completed!
    error: string // completed!
    totalUsers: number // completed!
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = name === '' ? s.error : s.notError // completed!
    const attention = name === '' ? 'Поле не должно быть пустым!' : ''

    return (
        <div>

            <div>
                <input value={name} onChange={setNameCallback} className={inputClass}/>
                <button className={s.btnAddName} onClick={() => addUser(name)}>add</button>
                <span>{totalUsers}</span>
            </div>
            <small className={s.attention}>{error}</small>

        </div>
    )
}

export default Greeting
