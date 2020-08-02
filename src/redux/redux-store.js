import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleWare from 'redux-thunk'


import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer'
import authReducer from './auth-reducer';
import {reducer as formReducer} from 'redux-form'


//ключ - стэйт, значение - редьюсер
//так передастся нужный стэйт в редьюсер через initialState
const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer // должно называться именно form, т.к. библиотека будет искать form
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 

window.store = store

export default store