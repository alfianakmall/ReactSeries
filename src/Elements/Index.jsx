import React from 'react'
import Input from './Input'
import Label from './Label'

const Index = (props) => {
    const {label, name, type, placeholder} = props
  return (
    <div className="mb-6">
        <Label htmlFor={name}>{label}</Label>
        <Input name={name} type={type} placeholder={placeholder}></Input>
        
    </div>
  )
}

export default Index