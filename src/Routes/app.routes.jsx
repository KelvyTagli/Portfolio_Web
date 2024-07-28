import { Routes, Route } from 'react-router-dom'

import { Home } from '../Pages/Home';
import { About } from '../Pages/About'
import { Portfolio } from '../Pages/Portfolio';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Portfolio' element={<Portfolio/>}/>
        </Routes>
    )
}