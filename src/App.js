import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Users from './components/Navbar/Users/Users'
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
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
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>

          <Route path='/profile' render={() => <Profile/>}/>

          <Route path='/users' render={() => <Users />}/>
          
        </div>
      
      </div>
    </BrowserRouter>
    
  );
}

export default App;
