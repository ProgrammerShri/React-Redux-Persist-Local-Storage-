import { connect, useDispatch } from "react-redux";
import { increment, decrement } from "./rootReducer/action";
import "./App.css";


const App = (props) => {
  
  const dispatch = useDispatch();
  
  return (
    <div className="maindiv">
      <div className="Label"> <h1> Counter </h1> </div>
      <div className="counter">  <h2> {props.abd} </h2> </div>
      <div >
        <button className="Btn" onClick={() => dispatch(increment())}> + </button>
        <button className="Btn" onClick={() => dispatch(decrement())}> - </button>
      </div>
    </div>
  );
};

export default connect( (state)=>({abd:state.count}) ) (App);


