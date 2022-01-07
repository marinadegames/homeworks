import React, {useState} from 'react'
import {PATH} from "./Rout";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {

    const [openMenu, setOpenMenu] = useState<boolean>(false)


    const onClickMenuHandler = () => {
        !openMenu ? setOpenMenu(true) : setOpenMenu(false)

    }

    return (
        <div className={s.headerMenu}
             onClick={onClickMenuHandler}>
            <div className={s.menuTitle}>Menu</div>

            <div className={openMenu ? s.menuMainOpen : s.menuMainClose}>
                <NavLink className={s.itemMenu}
                         to={PATH.PRE_JUNIOR}> PreJunior </NavLink>
                <NavLink className={s.itemMenu}
                         to={PATH.JUNIOR}> Junior </NavLink>
                <NavLink className={s.itemMenu}
                         to={PATH.JUNIOR_PLUS}> Junior Plus </NavLink>
            </div>


        </div>
    )
}

export default Header
