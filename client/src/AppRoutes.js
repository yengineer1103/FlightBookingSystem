import React from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingView from './pages/LandingView'
import FlightInfo from './pages/FlightInfo'
import BookingInfo from './pages/BookingInfo'
export default function AppRoutes(props) {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingView/>}></Route>
            <Route path='/viewFlightInfo' element={<FlightInfo/>}></Route>
            <Route path='/bookFlight/:id' element={<BookingInfo/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
