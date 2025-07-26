import { useState } from 'react'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
