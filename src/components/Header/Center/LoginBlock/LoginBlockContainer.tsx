import React from 'react';
import LoginBlock from "./LoginBlock";
import {connect} from 'react-redux';
import {logout} from "../../../../redux/authReducer";
import {AppStateType} from "../../../../redux/redux-store";


type MSTPType = {
  id: string | undefined
  isAuth: boolean
}

type MDTPType = {
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
  logout
}

class LoginBlockContainer extends React.Component<LoginBlockPropsType> {

  render() {
    return (
      <LoginBlock
        id={this.props.id}
        isAuth={this.props.isAuth}
        logout={this.props.logout}
      />
    )
  }
}

export default connect(mapStateToProps, MDTP)(LoginBlockContainer)