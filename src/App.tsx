import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import Main from './views/Main';
import IngredientsView from "./views/ingredients/IngredientsView";

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}>
            <Route index element={<HomeView/>}></Route>
            <Route path='/ingredients' element={<IngredientsView/>}></Route>
          </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
