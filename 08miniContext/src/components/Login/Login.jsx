import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'

function Login() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({name, password});
  }

  return (
    <div>
        <input 
        type="name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login