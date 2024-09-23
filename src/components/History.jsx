import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadHistory } from '../redux/store.js';
import './History.scss'

function History() {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.calculator.history);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('history')) || [];
    dispatch(loadHistory(savedHistory));
  }, [dispatch]);

  return (
    <div className="history">
      <h1>Lịch sử</h1>
      <ul className='history-list'>
        {history.map((item, index) => (
          <li key={index} className='history-item'>
            <span>{item.input} = {item.result}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
