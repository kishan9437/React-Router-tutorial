import React from 'react'
import { Link } from 'react-router-dom'

const userData = {
    users: [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
        { id: 3, name: "User 3" },
    ],
}
function UserList() {
    return (
        <>
        <h2>UserList</h2>
        <ul>
            {
                userData.users.map((user)=>(
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.name}</Link>
                    </li>
                ))
            }
        </ul>
        </>
    )
}

export default UserList
