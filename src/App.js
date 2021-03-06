import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {
    return (
        <div>
            <div className="header-wrapper">
                <Header/>
            </div>
            <div className="main-wrapper">
                <Navbar />
                <div className="content">
                    <Route exact path='/' render={() => <ProfileContainer store={props.store} />}/>
                    <Route path='/profile' render={() => <ProfileContainer store={props.store} />}/>
                    <Route path='/friends' render={() => <FriendsContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
