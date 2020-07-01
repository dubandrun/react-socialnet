import React from "react";

import classes from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
  let state = props.dialogsPage
  
  let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
  
  let messagesElements = state.messagesData.map(message => <Message text={message.text}/>)
  
  let newMessageBody = state.newMessageBody

  const onSendMessageClick = () => {
    props.sendMessage()
  
  }
  const onNewMessageChange = (event) => {
    let body = event.target.value
    props.enterText(body)
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
        <textarea 
          onChange={onNewMessageChange} 
          placeholder="Enter your message here" 
          value={newMessageBody}
        ></textarea>
      </div>
      <div>
        <button onClick={onSendMessageClick}>Enter</button>
      </div>
    </div>
  )
}

export default Dialogs;



