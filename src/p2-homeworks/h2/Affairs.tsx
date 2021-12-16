// imports
import React from 'react'
import Affair from './Affair'
import s from './Affairs.module.css'
import {AffairType} from './HW2'

// types
type AffairsPropsType = { // need to fix any
    data: any
    setFilter: any
    deleteAffairCallback: any
}

//components
function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a.name}
            priority={a.priority}
            deleteAffairCallback={props.deleteAffairCallback}

        />
    ))

    const setAll = () => {} // need to fix
    const setHigh = () => {}
    const setMiddle = () => {}
    const setLow = () => {}

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} className={s.btnAll}>All</button>
            <button onClick={setHigh} className={s.btnHigh}>High</button>
            <button onClick={setMiddle} className={s.btnMiddle}>Middle</button>
            <button onClick={setLow} className={s.btnLow}>Low</button>
        </div>
    )
}

export default Affairs
