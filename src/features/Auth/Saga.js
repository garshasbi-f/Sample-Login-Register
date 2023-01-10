import { takeEvery, call, put } from "redux-saga/effects";
import { LOGIN_USER, REGISTER_USER } from "./Action";
import { loginUserServer, registerUserServer } from "./Api";
import { addUser, setErrorMessage , setIsloadin} from "./AuthSlice";

function* handleUserLogin(action) {
  try {
    yield put(setIsloadin())
    const response = yield call(loginUserServer, action.payload);
    yield put(addUser(response));
    yield put(setErrorMessage(null));
  } catch (error) {
    yield put(setErrorMessage("Somthing went wrong..."));
  }
  yield put(setIsloadin())
}

function* handleUserRegister(action) {
  try {
    yield put(setIsloadin())
    const response = yield call(registerUserServer, action.payload);
    yield put(addUser(response));
    yield put(setErrorMessage(null));
  } catch (error) {
    yield put(setErrorMessage("Somthing went wrong..."));
  }
  yield put(setIsloadin())
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, handleUserLogin);
  yield takeEvery(REGISTER_USER, handleUserRegister);
}

export default authSaga;
