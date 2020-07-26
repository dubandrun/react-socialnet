import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Profile from './Profile'
import {getProfileInfoThunkCreator} from '../../redux/profile-reducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

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

//hoc

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => {
  return {
   profile: state.profilePage.profile
  }
}

// const UrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, {getProfileInfoThunkCreator})(UrlDataContainerComponent)

export default compose(
  connect(mapStateToProps, {getProfileInfoThunkCreator}),//3
  withRouter,//2
  withAuthRedirect//1 Обертка
)(ProfileContainer) 

