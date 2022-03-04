// imports
import React, {useState} from "react";
import {requestAPI} from "./RequestsAPI";
import s from './HW13Styles.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

// component
export const Request = () => {

    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [answer, setAnswer] = useState('')
    const [isError, setIsError] = useState(true)


    const req = () => {
        requestAPI.postRequest(isError)
            .then(resp => {
                console.log(resp)
                setIsChecked(true)
                setAnswer(resp.data.errorText)
            })
            .catch(error => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
                setAnswer(error.response.data.errorText)
            })
    }

    const onChangeCheckbox = () => {
        if (isChecked) {
            setIsChecked(false)
            setAnswer('')
        }
    }
    const onChangeIsError = () => {
        setIsError(!isError)
    }

    return (
        <div className={s.boxRequest}>
            <div className={s.box}>
                <small>Если checkbox активирован, его можно снять и сделать запрос снова.</small>
                <small>Можно включить имитацию ошибки, или отключить</small>
                <div className={s.container}>
                    <input type={"checkbox"}
                           className={s.checkboxRequest}
                           onChange={onChangeIsError}
                    />
                    <label style={isError ? {color: 'greenyellow'} : {color: 'red'}}>
                        Ошибка {isError ? 'отключена' : ' включена'}
                    </label>
                </div>

            </div>

            <div className={s.container}>
                <SuperButton onClick={req}>CLICK!</SuperButton>
                <input type="checkbox"
                       className={s.checkboxRequest}
                       checked={isChecked}
                       onChange={onChangeCheckbox} // чтобы в консоли не ругалось)))
                />
                <small>{answer}</small>
            </div>
        </div>
    )
}