import "./index.css";
import App from "./App";
import theme from "./theme";
import React from "react";
import ReactDOM from "react-dom";
import rootEpic from "./Redux/Epics";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./Redux/Reducers/index";
import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import {
  ConnectedRouter,
  routerMiddleware as createRouterMiddleware,
} from "connected-react-router";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const routerMiddleware = createRouterMiddleware(history);
const epicMiddleware = createEpicMiddleware();
const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(epicMiddleware, routerMiddleware))
);
epicMiddleware.run(rootEpic);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
