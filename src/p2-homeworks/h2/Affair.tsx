import React from 'react'

type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
    }// need to fix

    return (
        <div>
            <button onClick={deleteCallback}>X</button>
            {props.affair} {}

        </div>
    )
}

export default Affair
