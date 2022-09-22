import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Header from './Common/Header';

const Login = lazy(() => import('./Components/Auth/Login'))

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
