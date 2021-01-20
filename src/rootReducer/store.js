import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducer from "./reducer";


const persistConfig = {
  key: "root",
  storage,
};

const mainReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(mainReducer,applyMiddleware(logger));
export let persistor = persistStore(store);
