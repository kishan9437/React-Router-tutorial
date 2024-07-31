import React from 'react'
import { useParams } from 'react-router-dom'

const userData = {
    users: [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
        { id: 3, name: "User 3" },
    ]
}
function UserProfile() {
    const { userId } = useParams();
    const user=userData.users.find((user)=> user.id===parseInt(userId));

    return (
        <>
            <h2>UserProfiles</h2>
            {user?(
                <div>
                    <h3>Name: {user.name}</h3>
                    <p>Id: {user.id}</p>
                </div>
            ):(
                <p>page not found</p>
            )}
        </>
    )
}

export default UserProfile
