// imports
import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

// types
export type UserType = {
    _id: number
    name: string
    age: number
}

// local state
const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

// это моя функция, решил расширить функционал проверкой лет для правильного отображения
function checkerAge (age: number) {
    let lastNumber = Number( age.toString().split('').pop() )
    if (lastNumber === 1) return 'год'
    else if (lastNumber >= 2 && lastNumber <= 4) return 'года'
    else return 'лет'
}

// component
function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
        <div className={s.peopleAgeAndName} key={p._id}>
            <div>{p.name}</div>
            <div>{p.age} {checkerAge(p.age)}
            </div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
        <div>
            <b>homework 8</b>
            {finalPeople}

            <SuperButton style={{margin:'0.5rem 0.5rem 0 0'}} onClick={sortUp}>sort up</SuperButton>
            <SuperButton style={{margin:'0.5rem 0.5rem 0 0'}} onClick={sortDown}>sort down</SuperButton>
            <SuperButton style={{margin:'0.5rem 0.5rem 0 0'}} onClick={check18}>check 18</SuperButton>

            <hr/>
        </div>
    )
}

export default HW8
