import React, { Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store'

import { initializeApp } from './redux/app-reducer';

import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar';
// import UsersContainer from './components/Users/UsersContainer'
// import Login from './components/Login/Login';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import Preloader from './components/common/Preloader/Preloader';
import './App.css';


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const Login = React.lazy(() => import('./components/Login/Login'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {return <Preloader />}
    return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path='/dialogs' render={() => <DialogsContainer/>}/>
              <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
              <Route path='/users' render={() => <UsersContainer />}/>
              <Route path='/login' render={() => <Login />}/>
            </Suspense>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {initializeApp})(App)
const SocialJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SocialJSApp

