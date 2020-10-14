import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunkMiddleWare from 'redux-thunk'

import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer'
import authReducer from './auth-reducer';
import {reducer as formReducer} from 'redux-form'
import appReducer from './app-reducer';

//ключ - стэйт, значение - редьюсер
//так передастся нужный стэйт в редьюсер через initialState
const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer, // должно называться именно form, т.к. библиотека будет искать form
  app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.__store__ = store

export default store