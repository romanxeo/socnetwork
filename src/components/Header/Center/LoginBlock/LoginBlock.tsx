import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './LoginBlock.module.css'
import {MSTPType} from './LoginBlockContainer';

const LoginBlock = (props: MSTPType) => {
  return (
    <div>
      {props.isAuth
        ? <div className={s.bottom}>{props.userId}</div>
        : <NavLink to={'/login'} className={s.bottom}>Login</NavLink>}
    </div>
  )
}

export default LoginBlock