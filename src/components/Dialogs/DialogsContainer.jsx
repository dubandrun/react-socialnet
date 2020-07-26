// import React from "react";
import { connect } from "react-redux";

import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs'
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
    dispatch(sendMessageCreator())
  },
    enterText: (body) => {
    dispatch(updateNewMessageBodyCreator(body))
    }
  }
}

// const AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect// вызовется 1ой, примет Dialogs. Результат этого пойдет в connect.
)(Dialogs) 



