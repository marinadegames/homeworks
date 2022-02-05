import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        console.log('STOP')
        window.clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            let newDate = new Date()
            setDate(newDate)
            console.log(newDate.toLocaleTimeString())

        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString()
    const stringDate = date.toDateString()

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={s.stringTime}>
                {stringTime}
            </div>
            {show && (
                <div className={s.stringDate}>
                    {stringDate}
                </div>
            )}
            <div className={s.btnGroupForTimeAndDate}>
                <SuperButton onClick={start} style={{margin: '0 0.5rem 0 0'}}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
