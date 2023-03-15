import logo from './logo.svg'
import './App.css'
import Counter from './components/Counter'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import Inventory from './views/Inventory'
import Profile from './views/Profile'
import Cars from './views/Cars'
import SingleCarData from './views/SingleCarData'
import NotFound404 from './views/NotFound404'



function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
          
          <li>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <Link to="/cars">Cars</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/inventory" element = {<Inventory />} />
        <Route path = "/profile" element = {<Profile />} />
        <Route path= "/cars" element= {<Cars />} />
        <Route path= "/cars/:id" element= {<SingleCarData />} />

        <Route path= "/NotFound404" element= {<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
