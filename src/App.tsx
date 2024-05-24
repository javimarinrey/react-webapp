import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeView from './views/Home';
import Main from './views/Main';
import UserView from './views/userView/User';
import UserProvider from "./context/UserContext";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

function App() {
    return (
        <div>
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Main/>}>
                            <Route index element={<HomeView/>}></Route>
                            <Route path='/login' element={<LoginView/>}></Route>
                            <Route path='/register' element={<RegisterView/>}></Route>
                            <Route path='/user' element={<UserView/>}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </div>
    );
}

export default App;
