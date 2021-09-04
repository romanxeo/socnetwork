import React from 'react';
import s from './Login.module.css';
import {Field, reduxForm} from 'redux-form'
import {Input} from "../common/formsControls/FormsControl";
import {
  maxLengthCreator,
  requiredField
} from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10)

const LoginForm = (props: any) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field
        placeholder={'login'}
        component={Input}
        name={'login'}
        validate={[requiredField, maxLength10]}
      />
    </div>
    <div>
      <Field
        placeholder={'password'}
        component={Input}
        name={'password'}
        validate={[requiredField, maxLength10]}
      />
    </div>
    <div>
      <Field
        type={'checkbox'}
        component={Input}
        name={'rememberMe'}
        validate={[requiredField, maxLength10]}
      />
      Remember me
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
};

export default Login