import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogsData.map(
    dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>
    )
  
  let messagesElements = props.state.messagesData.map(
    message => <Message text={message.text}/>
    )
  
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
       {dialogsElements}
      </div>

      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;