import React from "react";
import { GoogleLogin } from "react-google-login";

const Login = () => {

    const responseGoogle = (res) => {
        console.log(res)
    }
  return (
    <div>
      <h1>Google Login</h1>
      <GoogleLogin
        clientId="606550930067-3rnpkji74rfita1ncpinlsfplqpql1o8.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;
