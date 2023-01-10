import AuthForm from "../components/Auth/AuthForm";
import {
  selectErrorMessage,
  selectIsLoading,
} from "../features/Auth/AuthSlice";
import { useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Error from "../components/Error/Error";

const AuthPage = () => {
  const errorMessage = useSelector(selectErrorMessage);
  const isLoading = useSelector(selectIsLoading);

  let content = <AuthForm />;

  if (errorMessage) {
    content = <Error />;
  }

  if (isLoading) {
    content = (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return <div>{content}</div>;
};

export default AuthPage;
