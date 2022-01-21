import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import {PreJunior} from "./pages/PreJunior";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
}

function Rout() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate replace to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>

                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Rout
