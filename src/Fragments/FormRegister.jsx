import React from 'react'
import Index from '../Elements/Index'
import Button from '../Elements/Button'


const FormRegister = () => {
  return (
    <form action="">
    <Index 
      label="Full Name" 
      type="text" 
      placeholder="@gmail.com" 
      name="fullname">
    </Index>
    <Index 
      label="Email" 
      type="email" 
      placeholder="@gmail.com" 
      name="email">
    </Index>
    <Index
      label="password" 
      type="password" 
      placeholder="****" 
      name="password">
    </Index>
    <Index
      label="Confirm Password" 
      type="password" 
      placeholder="****" 
      name="confirmpassword">
    </Index>
    <Button variant="bg-blue-700 w-full">Register</Button>
  </form>
  )
}

export default FormRegister