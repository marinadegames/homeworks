// imports
import React from 'react'
import s from './Affairs.module.css'

// types
type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    priority: any
    deleteAffairCallback: any // need to fix any
}

//components
function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
    }// need to fix

    let colorPriority;

    if (props.priority === 'low'){
        colorPriority = s.lowPriority
    }else if (props.priority === 'high'){
        colorPriority = s.highPriority
    }else if (props.priority === 'middle'){
        colorPriority = s.middlePriority
    }

    return (
        <div className={s.affairBox}>

            <button onClick={deleteCallback} className={s.deleteAffairBtn}>X</button>

            <div className={s.divAffair}>
                <span className={s.affair}>
               {props.affair}
            </span>
            </div>

            <div className={s.divPriority}>
                <small className={colorPriority}>
                    {props.priority}
                </small>
            </div>



        </div>
    )
}

export default Affair
