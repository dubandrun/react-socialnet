import React from 'react'
import { reduxForm } from 'redux-form'
import { Input, createField } from '../common/FormsControls/FormsControls'
import { required, minLengthCreator, maxLengthCreator } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { loginThunkCreator, logoutThunkCreator } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'

import styles from '../common/FormsControls/FormsControls.module.css'

let maxLength30 = maxLengthCreator(30)
let minLength2 = minLengthCreator(2)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        {createField('email', 'Email', Input, [required, maxLength30, minLength2])}
        {createField('password', 'Password', Input, [required, maxLength30, minLength2], {type: 'password'})}
        {createField('rememberMe', null, Input, null, {type: 'checkbox'}, 'remember me')} 

        {props.captchaUrl && <img src={props.captchaUrl} alt='captchapic' />}
        {props.captchaUrl && createField('captcha', 'Enter symbols here', Input, [required])}

        {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  console.log(props)
  const onSubmit = (formData) => {
    props.loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return <div>
    <h3>Login</h3>
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
  </div>
}

const mapStateToProps = (state) => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {loginThunkCreator, logoutThunkCreator})(Login)
