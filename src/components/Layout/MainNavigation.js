import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./MainNavigation.module.css";
import { selectIsLogin, setErrorMessage } from "../../features/Auth/AuthSlice";
import { logout } from "../../features/Auth/AuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const MainNavigation = () => {
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = () => {
    dispatch(setErrorMessage(null));
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/auth");
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLogin && (
            <li onClick={loginHandler}>
              <Link to="/auth">Login</Link>
            </li>
          )}

          {isLogin && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}

          {isLogin && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
