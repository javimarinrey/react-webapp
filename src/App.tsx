import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/Home';
import Main from './views/Main';
import UserView from './views/User';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}>
            <Route index element={<HomeView/>}></Route>
            <Route path='/user' element={<UserView/>}></Route>
          </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
