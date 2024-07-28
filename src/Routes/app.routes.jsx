import { Routes, Route } from 'react-router-dom'

import { Home } from '../Pages/Home/index';
import { About } from '../Pages/About/index'
import { Portfolio } from '../Pages/Portfolio/index';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/Portfolio_Web/' element={<Home/>}/>
            <Route path='/Portfolio_Web/About' element={<About/>}/>
            <Route path='/Portfolio_Web/Portfolio' element={<Portfolio/>}/>
        </Routes>
    )
}