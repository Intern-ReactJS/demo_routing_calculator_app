import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setInput, setResult ,clearInput, addToHistory} from "../redux/store.js";
import Button from "./Button";
import './calculator.scss';

function Calculator() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const input = useSelector((state) => state.calculator.input);
  const result = useSelector((state) => state.calculator.result);

  const handleClick = (value) => {
    if (value === "C") {
      dispatch(clearInput());
    } else if (value === "=") {
      try {
        const calcResult = eval(input); 
        dispatch(setResult(calcResult));
        dispatch(addToHistory({ input, result: calcResult }));
        localStorage.setItem('history', JSON.stringify([...JSON.parse(localStorage.getItem('history')) || [], { input, result: calcResult }]));
      } catch {
        dispatch(setResult('Error'));
      }
    } else {
      dispatch(setInput(input + value));
    }
  };



  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="display">
        <p>{input}</p>
        <h2>{result}</h2>
      </div>
      <div className="buttons">
        <Button value="7" onClick={handleClick} />
        <Button value="8" onClick={handleClick} />
        <Button value="9" onClick={handleClick} />
        <Button value="+" onClick={handleClick} />
        <Button value="4" onClick={handleClick} />
        <Button value="5" onClick={handleClick} />
        <Button value="6" onClick={handleClick} />
        <Button value="-" onClick={handleClick} />
        <Button value="1" onClick={handleClick} />
        <Button value="2" onClick={handleClick} />
        <Button value="3" onClick={handleClick} />
        <Button value="*" onClick={handleClick} />
        <Button value="0" onClick={handleClick} />
        <Button value="/" onClick={handleClick} />
        <Button value="=" onClick={handleClick} />
        <Button value="C" onClick={handleClick} />    
        <Button value="History" onClick={() => navigate('/history')} />
      </div>
    </div>
    
  );
}

export default Calculator;
