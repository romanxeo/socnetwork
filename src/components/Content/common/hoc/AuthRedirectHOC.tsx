import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";

type MSTPFRType = {
  isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppStateType): MSTPFRType => {
  return {
    isAuth: state.auth.isAuth
  }
}

export const withAuthRedirectHOC = (Component: any) => {

  class RedirectComponent extends React.Component<any, any> {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to={'/login'}/>
      }
      ;
      return <Component {...this.props}/>
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

  return ConnectedAuthRedirectComponent
}