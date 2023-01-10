import {fork} from "redux-saga/effects";
import authSaga from "../features/Auth/Saga"

function* rootSaga (){
    yield fork(authSaga)
}


export default rootSaga;