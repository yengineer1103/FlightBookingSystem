import React from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingView from './pages/LandingView'
import FlightInfo from './pages/FlightInfo'
export default function AppRoutes(props) {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingView/>}></Route>
            <Route path='/viewFlightInfo' element={<FlightInfo/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
