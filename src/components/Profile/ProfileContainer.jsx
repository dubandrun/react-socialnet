import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Profile from './Profile'
import {
  getProfileInfoThunkCreator,
  getUserStatusThunkCreator,
  updateUserStatusThunkCreator,
  saveAvatarThunkCreator,
  saveProfileThunkCreator
} from '../../redux/profile-reducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId
    //my id 9293
    if (!userId) {
      userId = this.props.loggedUserId
      if (!userId) {
        this.props.history.push('/login')
      } 
    }
    this.props.getProfileInfoThunkCreator(userId)
    this.props.getUserStatusThunkCreator(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <Profile 
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatusThunkCreator={this.props.updateUserStatusThunkCreator}
        saveAvatarThunkCreator={this.props.saveAvatarThunkCreator}
      />
    )
  }
}

//hoc

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loggedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  }
}

// const UrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, {getProfileInfoThunkCreator})(UrlDataContainerComponent)

export default compose(
  connect(mapStateToProps, {
    getProfileInfoThunkCreator, 
    getUserStatusThunkCreator, 
    updateUserStatusThunkCreator,
    saveAvatarThunkCreator,
    saveProfileThunkCreator
  }),//3
  withRouter,//2
  withAuthRedirect//1 Обертка
)(ProfileContainer) 

