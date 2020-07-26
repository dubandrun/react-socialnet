import React from "react";

import classes from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.dialogsPage
  
  let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} avatar={dialog.avatar}/>)
  
  let messagesElements = state.messagesData.map(message => <Message text={message.text} key={message.id}/>)
  
  let newMessageBody = state.newMessageBody

  const onSendMessageClick = () => {
    props.sendMessage()
  
  }
  const onNewMessageChange = (event) => {
    let body = event.target.value
    props.enterText(body)
  }

  if (!props.isAuth) return <Redirect to='/login' />

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



