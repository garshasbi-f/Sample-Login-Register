import axios from "axios";

 export const registerUserServer = async (val) => {
    const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCt-HBjRdUmDffdUlG9Y6IFXxp1QpK-qLY"
    const response = await axios.post(url , val);
    return response.data;
 }

 export const loginUserServer = async (val) => {
    const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCt-HBjRdUmDffdUlG9Y6IFXxp1QpK-qLY"
    const response = await axios.post(url , val);
    return response.data;
 }