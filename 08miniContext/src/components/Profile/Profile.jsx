import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'

function Profile() {
    
    const {user} = useContext(UserContext);

    if(!user) return <div>Please provide user</div>

    return <div>Welcome, {user.name} your password is {user.password}</div>
}

export default Profile