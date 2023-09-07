import { useRouteError } from "react-router-dom";
import React from 'react'

const ErrorPage = () => {
    const error = useRouteError()
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
        <h1 className="text-3xl font-bold">OOPS!</h1>
        <p className="text-xl my-2">Sorry, an unexpected error has occurred</p>
        <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage