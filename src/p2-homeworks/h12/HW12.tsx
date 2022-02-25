import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeAC, ThemesType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];


function HW12() {
    // useSelector and useDispatch
    const theme = useSelector<AppStoreType, ThemesType>(state => state.themeReducer)
    const dispatch = useDispatch()

    // functions
    const changeThemeHandler = (selectedTheme: ThemesType) => {
        dispatch(changeThemeAC(selectedTheme))
    }

    // return
    return (
        <div className={s.container}>
            <div className={s[theme]}>
                <h3 className={s.title}>homework 12</h3>

                <div className={s.boxSelectors}>
                    <SuperSelect options={themes}
                                 value={theme}
                                 onChangeOption={changeThemeHandler}/>
                    <SuperRadio options={themes}
                                value={theme}
                                onChangeOption={changeThemeHandler}/>
                </div>

            </div>
        </div>
    );
}

export default HW12;
