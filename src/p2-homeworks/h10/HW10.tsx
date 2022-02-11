import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW10.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {initStateType, loadingAC} from "./bll/loadingReducer";


function HW10() {

    const title = useSelector<AppStoreType, initStateType>(state => state.loading)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState<boolean>(false)

    const setLoadingHandler = () => {
        dispatch(loadingAC('DOWNLOAD COMPLETE!'))
        setLoading(true)
        setTimeout( () => {
            setLoading(false)
        },1500)
        console.log('loading...')
    };



    return (

            <div>

                homeworks 10

                {loading
                    ? (
                        <div className={s.spinner}><small> loading... </small></div>

                    ) : (
                        <div>
                            <SuperButton onClick={setLoadingHandler}>set loading...</SuperButton>
                            <small className={s.downloadTitle}>{title.text}</small>
                        </div>
                    )
                }

                <hr/>
                {/*для личного творчества, могу проверить*/}
                {/*<Alternative/>*/}

            </div>
    )
}

export default HW10
