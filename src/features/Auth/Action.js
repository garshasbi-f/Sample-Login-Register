import { createAction } from "@reduxjs/toolkit";

export const LOGIN_USER = "login-user";
export const loginAction = createAction(LOGIN_USER);

export const REGISTER_USER = "register-user";
export const registerAction = createAction(REGISTER_USER);