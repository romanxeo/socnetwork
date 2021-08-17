import React from 'react';
import LoginBlock from "./LoginBlock";
import {connect} from 'react-redux';
import {getAuthUserData} from "../../../../redux/authReducer";
import {AppStateType} from "../../../../redux/redux-store";


export type MSTPType = {
  userId: string | undefined
  isAuth: boolean
}

type MDTPType = {
  getAuthUserData: () => void;
}

type LoginBlockPropsType = MSTPType & MDTPType

const mapStateToProps = (state: AppStateType): MSTPType => {
  return {
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
  }
}

let MDTP: MDTPType = {
  getAuthUserData
}

class LoginBlockContainer extends React.Component<LoginBlockPropsType> {
  componentDidMount() {
    this.props.getAuthUserData();
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