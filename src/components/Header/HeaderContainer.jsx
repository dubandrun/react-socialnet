import React from 'react';
import { connect } from 'react-redux';


import Header from './Header'
import {getAuthThunkCreator} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuthThunkCreator()
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


export default connect(mapStateToProps, {getAuthThunkCreator})(HeaderContainer);
