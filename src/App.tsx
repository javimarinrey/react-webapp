import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeView from './views/Home';
import Main from './views/Main';
import UserView from './views/userView/User';
import UserProvider from "./context/UserContext";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import TournamentDetailsView from "./views/userView/tournament/TournamentDetailsView";
import ClubsView from "./views/userView/clubs/ClubsView";
import TeamsView from "./views/userView/teams/TeamsView";
import PlayersView from "./views/userView/players/PlayersView";
import TournamentsView from "./views/userView/tournament/TournamentsView";

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
                            <Route path='/user/clubs' element={<ClubsView/>}></Route>
                            <Route path='/user/teams' element={<TeamsView/>}></Route>
                            <Route path='/user/players' element={<PlayersView/>}></Route>
                            <Route path='/user/tournaments' element={<TournamentsView/>}></Route>
                            <Route path='/user/tournament/:id' element={<TournamentDetailsView/>}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </div>
    );
}

export default App;
