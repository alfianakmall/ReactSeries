import React from 'react'
import AuthLayouts from '../Layouts/AuthLayouts'
import FormRegister from '../Fragments/FormRegister'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
    <FormRegister/>
  </AuthLayouts>
  )
}

export default RegisterPage