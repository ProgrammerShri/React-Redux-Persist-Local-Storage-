import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./rootReducer/store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={() => <h1> Loading..... </h1>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
