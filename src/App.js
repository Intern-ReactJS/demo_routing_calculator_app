import { Routes,Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import History from './components/History';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Calculator/>}></Route>
      <Route path='/history' element={<History/>}></Route>
    </Routes>
  );
}

export default App;
