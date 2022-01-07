import React from 'react'
import Header from './Header'
import {HashRouter} from "react-router-dom";
import Rout from "./Rout";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <Header/>
            <Rout/>
        </div>
    )
}

export default HW5
