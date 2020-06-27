import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage

  let dialogsElements = state.dialogsData.map(
    dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>
    )
  
  let messagesElements = state.messagesData.map(
    message => <Message text={message.text}/>
    )
  
  // let newMessageBody = props.state.dialogsPage.newMessageBody

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }
  const onNewMessageChange = (event) => {
    let body = event.target.value
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
       {dialogsElements}
      </div>

      <div className={classes.messages}>
        {messagesElements}
      </div>

      <div>
        <textarea onChange={onNewMessageChange} placeholder="Enter your message here"></textarea>
      </div>
      <div>
        <button onClick={onSendMessageClick}>Enter</button>
      </div>
    </div>
  )
}

export default Dialogs;