import React from 'react'

import * as axios from 'axios'

import Profile from './Profile'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {setUserProfile} from '../../redux/profile-reducer'

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {userId = 2}
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
      .then(res => {
        return (
          this.props.setUserProfile(res.data)
      )
    })
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

export default connect(mapStateToProps, {setUserProfile})(UrlDataContainerComponent)