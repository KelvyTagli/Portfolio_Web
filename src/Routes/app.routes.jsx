import { Routes, Route } from 'react-router-dom'

import { Home } from '../Pages/Home';
import { About } from '../Pages/About'
import { Portfolio } from '../Pages/Portfolio';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/Portfolio_Web/' element={<Home />}/>
            <Route path='/Portfolio_Web/About' element={<About/>}/>
            <Route path='/Portfolio_Web/Portfolio' element={<Portfolio/>}/>
        </Routes>
    )
}