import React from 'react';
import { connect } from 'react-redux';

import * as axios from 'axios'

import Header from './Header'
import { setAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {withCredentials: true})
    .then(res => {if (res.data.resultCode === 0) {
      let {id, login, email} = res.data.data
      this.props.setAuthUserData(id, login, email)
    }})
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
