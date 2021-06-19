import { Route } from "react-router";
import LogIn from "../Modules/Auth/LogIn";
import { Switch } from "react-router";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LogIn} />
      </Switch>
    </div>
  );
}

export default App;
