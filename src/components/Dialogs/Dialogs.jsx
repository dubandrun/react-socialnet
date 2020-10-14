import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

import { Textarea } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator, minLengthCreator } from "../../utils/validators/validators";

import classes from './Dialogs.module.css'

const Dialogs = (props) => {
  const state = props.dialogsPage
  const dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} avatar={dialog.avatar}/>)
  const messagesElements = state.messagesData.map(message => <Message text={message.text} key={message.id}/>)
  const maxLength100 = maxLengthCreator(100)
  const minLength1 = minLengthCreator(1)

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
