import { useAuth } from '@contexts'
import React from 'react'

function Root() {
  const { currentUser } = useAuth()
  console.log(currentUser)
  return (
    <div>
      User Info:
      <div>First name: {currentUser.FNAME}</div>
      <div>Last name: {currentUser.LNAME}</div>
      <div>Email: {currentUser.EMAIL}</div>
      <div>Birthday: {currentUser.BIRTHDAY}</div>
      <div>Role: {currentUser.ROLE}</div>
    </div>
  )
}

export default Root
