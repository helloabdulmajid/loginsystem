import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { Route,Link,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'

const Navbar = () => {
  return (
    <>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              positronX
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/sadada" element={<Login/>} />
              <Route path="/sign-in" element={<Signup/>} />
            </Routes>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar