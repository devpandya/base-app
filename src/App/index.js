import { Route } from "react-router";
import LogIn from "../Modules/Auth/LogIn";
import { Switch } from "react-router";
import "./App.css";
import Site from "../Modules/Site";
import Main from "../Modules/Main";
import { ROUTES } from "../Utility/constants";

function App(props) {
  return (
    <div className="App">
      <Route exact path={ROUTES.SITE} component={Site} />
      <Route exact path={ROUTES.MAIN} component={Main} />
      <Route exact path={ROUTES.LOGIN} component={LogIn} />
    </div>
  );
}

export default App;
