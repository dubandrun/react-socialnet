import React from 'react'

import Profile from './Profile'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {getProfileInfoThunkCreator} from '../../redux/profile-reducer'

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {userId = 2}
    this.props.getProfileInfoThunkCreator(userId)
  }

  render() {
    return (
      <Profile 
        {...this.props}
        profile={this.props.profile}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
   profile: state.profilePage.profile
  }
}

const UrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfileInfoThunkCreator})(UrlDataContainerComponent)