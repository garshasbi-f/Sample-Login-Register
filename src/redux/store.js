import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import authReducer from "../features/Auth/AuthSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, authReducer)


export const store = configureStore({
  reducer: {
    auth:persistedReducer
  },
  middleware: [sagaMiddleware],
});


sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
