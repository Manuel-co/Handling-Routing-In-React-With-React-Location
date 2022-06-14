import { React, useState } from "react";
import { Link } from "@tanstack/react-location";

const Login = ({getProtection}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [protectedPage, setProtectedPage] = useState(false);
  const userEmail = "admin@gmail.com";
  const userPassword = "admin";


  const handleLogin = () => {
    if (email === userEmail && password === userPassword) {
      setProtectedPage(true);
      getProtection(true)
      alert("Login Successful");
    } else {
      setProtectedPage(false);
      alert("Login Failed");
    }
  };

  return (
    
      <div className=" container h-screen flex justify-center items-center">
        <div className=" text-center shadow-lg w-1/2 bg-slate-100 py-4 px-5">
          <div>
            <h1 className=" text-4xl text-blue-600 font-bold">Login</h1>
          </div>
          <div className=" mt-8">
            <div className=" flex flex-col justify-center items-center gap-5">
              <div className=" flex justify-center items-center gap-3">
                <label className=" font-medium">Email</label>
                <input
                  className=" px-2 py-1 border-2 border-blue-600 rounded-md outline-none"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className=" flex justify-center items-center gap-3">
                <label className=" font-medium">Password</label>
                <input
                  className=" px-2 py-1 border-2 border-blue-600 rounded-md outline-none"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <Link to="/search">
                <button
                  className=" px-5 py-2 rounded-md bg-blue-600 text-white font-medium"
                  onClick={() => {
                    handleLogin();
                  }}
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
