import logo from './logo.svg'
import './App.css'
import Counter from './components/Counter'
import { useContext } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import Inventory from './views/Inventory'
import Profile from './views/Profile'
import Cars from './views/Cars'
import PostSingle from './views/PostSingle'
import { AuthContext } from './contexts/AuthProvider'


function App() {
  const { login, user, logout } = useContext(AuthContext)
  console.log(user)
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
      <div>
        {
          (user.loggedIn) ? 
          <>
            <button onClick={logout}>Log Out</button>
            <p>Current User: {user.displayName}</p>
          </>:
          <>
          <button onClick={login}>Log In</button>
          </>
        }
      </div>

      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/inventory" element = {<Inventory />} />
        <Route path = "/profile" element = {<Profile />} />
        <Route path= "/cars" element= {<Cars />} />
        <Route path= "/cars/:id" element= {<PostSingle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
