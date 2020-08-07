import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {return <Preloader />}
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />

          <Navbar 
            state={this.props.state.dialogsPage.dialogsData}
          />

          <div className='app-wrapper-content'>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>

            <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>

            <Route path='/users' render={() => <UsersContainer />}/>

            <Route path='/login' render={() => <Login />}/>
          </div>
        </div>
      </BrowserRouter>
      )
    }
}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App)

