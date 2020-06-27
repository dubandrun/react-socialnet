import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';


function App(props) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />

        <Navbar 
          state={props.state.dialogsPage.dialogsData}
        />

        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={
            () => <Dialogs 
              store={props.store}
            />}
          />
          <Route path='/profile' render={
            () => <Profile 
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}
            />}
            />
        </div>
      
      </div>
    </BrowserRouter>
    
  );
}

export default App;
