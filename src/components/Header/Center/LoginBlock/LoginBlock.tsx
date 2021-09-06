import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './LoginBlock.module.css'
import {LoginBlockPropsType} from './LoginBlockContainer';

const LoginBlock = (props: LoginBlockPropsType) => {

  return (
    <div>
      {props.isAuth
        ? <div onClick={props.logout} className={s.bottom}>{props.id}</div>
        : <NavLink to={'/login'} className={s.bottom}>Login</NavLink>}
    </div>
  )
}

export default LoginBlock