import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Admin from './components/admin/Dashboard'
import SignUp from './components/auth/SignUp'
import Login from './components/auth/Login'
import Greet from './components/Greet'
import { useState } from 'react'

function App() {
  const [userData, setUserData] = useState({})

  return (
    <>
      <Routes>
        <Route key='home' path='/home' element={<Home />}></Route>
        <Route key='greet' path='/' element={<Greet />}></Route>
        <Route key='admin' path='/admin' element={<Admin />}></Route>
        <Route key='sign-up' path='/sign-up' element={<SignUp />}></Route>
        <Route key='login' path='/login' element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
