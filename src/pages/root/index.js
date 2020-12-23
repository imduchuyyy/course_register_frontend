import { useAuth } from '@contexts'
import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'

const roles = {
    STUDENT: {
        path: '/student',
    },
    FAULTY: {
        path: '/faulty'
    }
}

function Root() {
    const { currentUser } = useAuth()
    console.log(currentUser)

    const location = useLocation()
    
    return (
        <div>root page</div> 
    )
}

export default Root
