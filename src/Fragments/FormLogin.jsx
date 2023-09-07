import React from 'react'
import Index from '../Elements/Index'
import Button from '../Elements/Button'

const FormLogin = () => {
  return (
    <form action="">
    <Index 
      label="email" 
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
    <Button variant="bg-blue-700 w-full">Login</Button>
  </form>
  )
}

export default FormLogin