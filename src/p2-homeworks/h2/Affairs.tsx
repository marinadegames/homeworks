// imports
import React from 'react'
import Affair from './Affair'
import s from './Affairs.module.css'
import { AffairType, FilterType } from './HW2'

// types
type AffairsPropsType = { // complete!
    data: Array<AffairType>
    setFilter: (a: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

//components
function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // complete!
            // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            key={a._id}
            id={a._id}
            affair={a.name}
            priority={a.priority}
            deleteAffairCallback={props.deleteAffairCallback}

        />
    ))

    const setAll = () => { props.setFilter('all') } // complete!
    const setHigh = () => { props.setFilter('high') }
    const setMiddle = () => { props.setFilter('middle') }
    const setLow = () => { props.setFilter('low') }

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
