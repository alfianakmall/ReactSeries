import React, { useEffect, useRef, useState } from "react";
import Index from "../Elements/Index";
import Button from "../Elements/Button";
import { login } from "../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    //send to local storage
    // localStorage.setItem("Email: ", event.target.email.value)
    // localStorage.setItem("Password: ", event.target.password.value)
    // //send to console
    // console.log(event.target.email.value + " " + event.target.password.value);
    // Redirect to Products Page
    // window.location.href = "/products"
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <Index
        label="Username"
        type="text"
        placeholder="John Davis"
        name="username"
        ref={usernameRef}
      ></Index>
      <Index
        label="password"
        type="password"
        placeholder="****"
        name="password"
      ></Index>
      <Button variant="bg-blue-700 w-full" type="submit">
        Login
      </Button>
      {loginFailed && (
        <h1 className="text-red-500 text-center mt-5">{loginFailed}</h1>
      )}
    </form>
  );
};

export default FormLogin;
