import React from "react";
import "./App.css";
import { incNumber } from "./actions/index";
import { decNumber } from "./actions/index";



import { useSelector, useDispatch } from "react-redux";

<<<<<<< HEAD
console.log('nice')
=======
console.log("hello all")
console.log("this is should also be merged")
console.log("ok all")
>>>>>>> f56bf644330997f8be8160f475214afc13f1d584

const App = () => {
  // it alternative to the useContext hooks in react / consumer from context API
  const mystate = useSelector((state) => state.changeTheNumber);

  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <a
              className="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(decNumber())}
            >
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="text"
              className="quantity__input"
              value={mystate}
            />
            <a
              className="quantity__plus"
              title="Increment"
              onClick={() => dispatch(incNumber(5))}
            >
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
