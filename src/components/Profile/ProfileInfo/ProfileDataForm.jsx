import React from 'react';
import { reduxForm } from 'redux-form';

import styles from './ProfileInfo.module.css'
import style from '../../common/FormsControls/FormsControls.module.css'

import {createField, Input, Textarea} from '../../common/FormsControls/FormsControls'

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return (
  <form onSubmit={handleSubmit}>
    <button>save</button>

    {error && <div className={style.formSummaryError}>{error}</div>}

    <div>
       <b>Full name: </b> {createField('fullName', 'full name', Input, [])}
    </div>

    <div>
      <b>Looking for a job: </b> {createField('lookingForAJob', '', Input, [], {type: 'checkbox'})}
    </div>

    <div>
      <b>My professional skills: </b> {createField('lookingForAJobDescription', 'my professional skills', Textarea, [])}
    </div>

    <div>
      <b>About me: </b> {createField('aboutMe', 'about me', Textarea, [])}
    </div>

    <div>
      <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
        return (
          <div key={key} className={styles.contact}>
            <b>{key}: </b> {createField('contacts.' + key, key, Textarea, [])}
          </div>
        )
      })}
    </div>
  </form>
  )
}

const ProfileDataFormReduxForm = reduxForm({form: 'contacts'})(ProfileDataForm)

export default ProfileDataFormReduxForm