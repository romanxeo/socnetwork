import React from 'react';
import s from './Login.module.css';
import {Field, reduxForm} from 'redux-form'
import {Input} from "../common/formsControls/FormsControl";
import {
  maxLengthCreator,
  requiredField
} from "../../../utils/validators/validators";
import {connect} from 'react-redux';
import {login} from '../../../redux/authReducer';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../../redux/redux-store";

const maxLength50 = maxLengthCreator(50)

const LoginForm = (props: any) => {
//const LoginForm = ({handleSubmit, error, captchaUrl}: any) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field
          placeholder={'email'}
          component={Input}
          name={'email'}
          validate={[requiredField, maxLength50]}
      />
    </div>
    <div>
      <Field
          placeholder={'password'}
          component={Input}
          name={'password'}
          type={'password'}
          validate={[requiredField, maxLength50]}
      />
    </div>
    <div>
      <Field
          type={'checkbox'}
          component={Input}
          name={'rememberMe'}
          className={s.checkBox}
      />
      Remember me
    </div>
    {props.error &&
    <div className={s.formSummaryError}>
      {props.error}
    </div>
    }

    {props.captchaUrl &&
    <img src={props.captchaUrl}/>
    }

    {props.captchaUrl &&
    <div>
      <Field
          placeholder={'captcha'}
          component={Input}
          name={'captcha'}
          validate={[requiredField, maxLength50]}
      />
    </div>
    }

    <div>
      <button>Login</button>
    </div>
  </form>
}
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)


type MSTPType = {
  isAuth: boolean
  captchaUrl: string | null
}

type MDTPType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type loginType = MSTPType & MDTPType

const MSTP = (state: AppStateType): MSTPType => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
}

const MDTP: MDTPType = {
  login
}


const Login = (props: loginType) => {
  const onSubmit = (formData: any) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }


  return (
    <div className={s.loginBlock}>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  )
};

export default connect(MSTP, MDTP)(Login)