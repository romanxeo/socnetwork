import React from 'react';
import LoginBlock from "./LoginBlock";
import axios from "axios";
import {connect} from 'react-redux';
import {setUserData} from "../../../../redux/authReducer";
import {AppStateType} from "../../../../redux/redux-store";

;

export type MSTPType = {
  userId: string | null
  isAuth: boolean
}

type MDTPType = {
  setUserData: (userId: string, login: string, email: string) => void
}

type LoginBlockPropsType = MSTPType & MDTPType

const mapStateToProps = (state: AppStateType): MSTPType => {
  return {
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
  }
}

let MDTP: MDTPType = {
  setUserData
}

class LoginBlockContainer extends React.Component<LoginBlockPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        debugger
        if (response.data.resultCode === 0) {
          let {id, login, email} = response.data.data;
          this.props.setUserData(id, login, email);
        }
      })
  }

  render() {
    return (
      <LoginBlock
        userId={this.props.userId}
        isAuth={this.props.isAuth}
      />
    )
  }
}

export default connect(mapStateToProps, MDTP)(LoginBlockContainer)