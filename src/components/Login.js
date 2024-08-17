import { useState, useRef } from "react";
import { body_bg_img_url } from "../utils/constants";
import { validateString } from "../utils/validation";
import "../css/Login.scss";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showError, setShowError] = useState(null);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    setShowError(null);
    setShowError(validateString(email.current.value));
  };

  return (
    <div className="">
      <div className="absolute">
        <img src={body_bg_img_url} alt="netflix-bg" className="body-img" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="login-container w-1/4 p-6 bg-black bg-opacity-80">
          <form className=" p-12 flex flex-col space-y-4 text-white" onSubmit={(e) => e.preventDefault()}>
            <p className=" text-3xl font-bold">{showLogin ? "Sign In" : "Sign Up"} </p>
            {!showLogin && (
              <input
                type="text"
                onChange={() => setShowError(null)}
                ref={fullName}
                className="p-4 bg-black bg-opacity-50 border border-gray-600 rounded hover:border-white-500"
                placeholder="Full Name"
              />
            )}
            <input
              type="text"
              onChange={() => setShowError(null)}
              ref={email}
              className="p-4 bg-black bg-opacity-50 border border-gray-600 rounded hover:border-white-500"
              placeholder="Email Address"
              required
            />
            <input
              type="password"
              onChange={() => setShowError(null)}
              ref={password}
              className="p-4 bg-black bg-opacity-50 border border-gray-600 rounded hover:border-white-500"
              placeholder="Password"
              required
            />

            {showError && <p className="text-center text-red-600">{showError}</p>}
            <button className="bg-red-500 p-4 rounded hover:bg-red-800" onClick={handleSubmit}>
              {showLogin ? "Sign In" : "Sign Up"}
            </button>
            <div className=" font-light">
              <p className="mt-4 text-gray-50">
                {showLogin ? "New to Netflix? " : "Already a member? "}

                <span className="cursor-pointer font-bold" onClick={(e) => {setShowError(null);setShowLogin(!showLogin)}}>
                  {showLogin ? "Sign up now." : "Sign In"}
                </span>
              </p>

              <p className="mt-4 text-xs text-gray-50">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
