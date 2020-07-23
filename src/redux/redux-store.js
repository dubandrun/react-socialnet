import {createStore, combineReducers, applyMiddleware} from 'redux'

import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer'
import authReducer from './auth-reducer';

import thunkMiddleWare from 'redux-thunk'

//ключ - стэйт, значение - редьюсер
//так передастся нужный стэйт в редьюсер через initialState
const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 

window.store = store

export default store