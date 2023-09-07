import React from 'react'
import AuthLayouts from '../Layouts/AuthLayouts'
import FormLogin from '../Fragments/FormLogin'
import { Link } from 'react-router-dom'

const LoginPage = (props) => {
  return (
    <AuthLayouts title="Login" type="login">
      <FormLogin/>
    </AuthLayouts>
  )
}

export default LoginPage