import React from 'react';
import s from './Login.module.css';
import {Field, reduxForm} from 'redux-form'

const LoginForm = (props: any) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field placeholder={'login'} component={'input'} name={'login'}/>
    </div>
    <div>
      <Field placeholder={'password'} component={'input'} name={'password'}/>
    </div>
    <div>
      <Field type={'checkbox'} component={'input'}
             name={'rememberMe'}/> Remember me
    </div>
    <div>
      <button>Login</button>
    </div>
  </form>
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props: any) => {
  const onSubmit = (formData: any) => {
    console.log(formData)
  }

  return (
    <div className={s.loginBlock}>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

export default Login