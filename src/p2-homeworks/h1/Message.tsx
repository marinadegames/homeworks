import React from 'react'
import s from "./Message.module.css";

type typePropsMessage = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: typePropsMessage) {
    return (
        <div className={s.msgBox}>
            <div className={s.avatarBox}>
                <div className={s.avatar}>
                    <img src={props.avatar} alt='userImg'/>
                </div>
            </div>
            <div className={s.msgMain}>
                <div className={s.leftBox}>
                    <div className={s.msgNameUser}>{props.name}</div>
                    <div className={s.msgText}>{props.message}</div>
                </div>
                <div className={s.rightBox}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
