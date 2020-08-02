import React from "react";

import classes from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator, minLengthCreator } from "../../utils/validators/validators";

const Dialogs = (props) => {
  let state = props.dialogsPage
  
  let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} avatar={dialog.avatar}/>)
  
  let messagesElements = state.messagesData.map(message => <Message text={message.text} key={message.id}/>)

  let maxLength100 = maxLengthCreator(100)
  let minLength1 = minLengthCreator(1)

  const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <Field 
          name='newMessageBody'
          component={Textarea}
          placeholder='Enter your message here'
          validate={[required, maxLength100, minLength1]} 
        />
        <div>
          <button>Enter</button>
        </div>
      </form>
    )
  }

  const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
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

      <AddMessageFormRedux onSubmit={addNewMessage}/>

    </div>
  )
}

export default Dialogs;



