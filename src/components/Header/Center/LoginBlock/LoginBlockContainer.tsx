import React from 'react';
import LoginBlock from "./LoginBlock";
import {connect} from 'react-redux';
import {getAuthUserData, logout} from "../../../../redux/authReducer";
import {AppStateType} from "../../../../redux/redux-store";


type MSTPType = {
  id: string | undefined
  isAuth: boolean
}

type MDTPType = {
  getAuthUserData: () => void;
  logout: () => void
}

export type LoginBlockPropsType = MSTPType & MDTPType

const mapStateToProps = (state: AppStateType): MSTPType => {
  return {
    id: state.auth.userId,
    isAuth: state.auth.isAuth
  }
}

let MDTP: MDTPType = {
  getAuthUserData,
  logout
}

class LoginBlockContainer extends React.Component<LoginBlockPropsType> {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <LoginBlock
        id={this.props.id}
        isAuth={this.props.isAuth}
        getAuthUserData={this.props.getAuthUserData}
        logout={this.props.logout}
      />
    )
  }
}

export default connect(mapStateToProps, MDTP)(LoginBlockContainer)