import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required, minLengthCreator, maxLengthCreator } from '../../utils/validators/validators'

let maxLength20 = maxLengthCreator(20)
let minLength2 = minLengthCreator(2)

const LoginForm = (props) => {
  
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='login' placeholder={'Login'} component={Input} validate={[required, maxLength20, minLength2]}/>
      </div>
      <div>
        <Field name='password' placeholder={'Password'} component={Input} validate={[required, maxLength20, minLength2]}/>
      </div>
      <div>
        <Field name='rememberMe' type={'checkbox'} component={Input}/>
      </div>
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
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return <div>
    <h3>Login</h3>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}


export default Login