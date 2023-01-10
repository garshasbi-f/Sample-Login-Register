// import { useState } from "react";
// import React, { useEffect } from "react";
// import classes from "./AuthForm.module.css";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { loginAction, registerAction } from "../../features/Auth/Action";
// import { selectIsLogin } from "../../features/Auth/AuthSlice";

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//     returnSecureToken: true,
//   });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isAth = useSelector(selectIsLogin);

//   const switchAuthModeHandler = () => {
//     setIsLogin((prevState) => !prevState);
//   };

//   useEffect(() => {
//     if(isAth){
//       navigate("/profile");
//     }
//   }, [isAth]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isLogin) {
//       dispatch(loginAction(user));
//     } else {
//       dispatch(registerAction(user));
//     }
//   };

//   const handleInputChange = (e) => {
//     setUser((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   return (
//     <section className={classes.auth}>
//       <h1>{isLogin ? "Login" : "Sign Up"}</h1>
//       <form onSubmit={handleSubmit}>
//         <div className={classes.control}>
//           <label htmlFor="email">Your Email</label>
//           <input
//             type="text"
//             name="email"
//             placeholder="enter email ..."
//             onChange={handleInputChange}
//             id="email"
//             required
//           />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor="password">Your Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="enter password ..."
//             onChange={handleInputChange}
//             id="password"
//             required
//           />
//         </div>
//         <div className={classes.actions}>
//           <button>{isLogin ? "Login" : "Create Account"}</button>
//           <button
//             type="button"
//             className={classes.toggle}
//             onClick={switchAuthModeHandler}
//           >
//             {isLogin ? "Create new account" : "Login with existing account"}
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default AuthForm;

//----------------------------------------------------------------------------------------

// import { useState } from "react";
// import React, { useEffect } from "react";
// import classes from "./AuthForm.module.css";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { loginAction, registerAction } from "../../features/Auth/Action";
// import { selectIsLogin } from "../../features/Auth/AuthSlice";
// import loginImg from "../../assets/login.gif";
// import registerImg from "../../assets/register.gif";

// import TextField from "@mui/material/TextField";
// import { Button } from "@mui/material";

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//     returnSecureToken: true,
//   });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isAth = useSelector(selectIsLogin);

//   const switchAuthModeHandler = () => {
//     setIsLogin((prevState) => !prevState);
//   };

//   useEffect(() => {
//     if (isAth) {
//       navigate("/profile");
//     }
//   }, [isAth]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isLogin) {
//       dispatch(loginAction(user));
//     } else {
//       dispatch(registerAction(user));
//     }
//   };

//   const handleInputChange = (e) => {
//     setUser((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   return (
//     <div className={classes.main}>
//       <div className={classes.usersImg}>
//         <img src={isLogin ? loginImg : registerImg} alt="" />
//       </div>
//       <div className={classes.usersForm}>
//         <form onSubmit={handleSubmit}>
//           <div className={classes.inputsForm}>
//             <TextField
//               id="email"
//               label="email"
//               variant="outlined"
//               type="text"
//               name="email"
//               placeholder="Enter your email"
//               onChange={handleInputChange}
//             />

//             <TextField
//               style={{ marginTop: 20 }}
//               id="password"
//               label="Password"
//               variant="outlined"
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className={classes.usersBtn}>
//             <Button
//               variant="contained"
//               color="primary"
//               type="submit"
//               style={{ height: "100%", width: 200 }}
//             >
//               {isLogin ? "Login" : "Create Account"}
//             </Button>

//             <button
//               type="button"
//               className={classes.toggle}
//               onClick={switchAuthModeHandler}
//             >
//               {isLogin ? "Create new account" : "Login with existing account"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;

//-----------------------------------------------------------------------------------

import { useState } from "react";
import React, { useEffect } from "react";
import classes from "./AuthForm.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction, registerAction } from "../../features/Auth/Action";
import { selectIsLogin } from "../../features/Auth/AuthSlice";
import loginImg from "../../assets/login.gif";
import registerImg from "../../assets/register.gif";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useInput from "../../hook/use-input";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const isAth = useSelector(selectIsLogin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPass,
    isValid: enteredPassIsValid,
    hasError: passInputHasError,
    valueChangeHandler: passChangedHandler,
    inputBlurHandler: passBlurHandler,
    reset: resetPassInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredPassIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  useEffect(() => {
    if (isAth) {
      navigate("/profile");
    }
  }, [isAth]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    const user = {
      email: enteredEmail,
      password: enteredPass,
      returnSecureToken: true,
    };
    if (isLogin) {
      dispatch(loginAction(user));
    } else {
      dispatch(registerAction(user));
    }
    resetEmailInput();
    resetPassInput();
  };

  return (
    <div className={classes.main}>
      <div className={classes.usersImg}>
        <img src={isLogin ? loginImg : registerImg} alt="" />
      </div>
      <div className={classes.usersForm}>
        <form onSubmit={handleSubmit}>
          <div className={classes.inputsForm}>
            <TextField
              id="email"
              label="email"
              variant="outlined"
              type="text"
              name="email"
              value={enteredEmail}
              color={emailInputHasError ? "error" : ""}
              placeholder="Enter your email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailInputHasError && (
              <div className={classes["error-text"]}>Email must be valid.</div>
            )}

            <TextField
              style={{ marginTop: 20 }}
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              inputProps={{
                minLength: 6,
                maxLength: 10
              }}
              value={enteredPass}
              color={passInputHasError ? "error" : ""}
              placeholder="Enter your password"
              onChange={passChangedHandler}
              onBlur={passBlurHandler}
            
             />
            
            {passInputHasError && (
              <div className={classes["error-text"]}>
                Password must be valid.
              </div>
            )}
          </div>

          <div className={classes.usersBtn}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ height: "100%", width: 200 }}
            >
              {isLogin ? "Login" : "Create Account"}
            </Button>

            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
