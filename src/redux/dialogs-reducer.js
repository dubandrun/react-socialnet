const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state, action) => {

  switch(action.type) {

    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body
      return state

    case SEND_MESSAGE:
      let body = state.newMessageBody
      state.newMessageBody = ''
      state.messagesData.push({ id: 6, text: body })
      return state

    default:
      return state
  }
}

// action creators
export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY, 
  body: text
})

export default dialogsReducer