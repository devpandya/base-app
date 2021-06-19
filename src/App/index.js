import "./App.css";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../Redux/Actions";

function App(props) {
  return (
    <div className="App">
      <div>{props.counter}</div>
      <div>
        <button onClick={props.increment}>INCREMENT BY 1</button>
      </div>
      <div>
        <button onClick={props.decrement}>DECREMENT BY 1</button>
      </div>
      <button onClick={props.reset}>RESET</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
