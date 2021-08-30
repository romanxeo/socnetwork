import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";

/*type MSTPType = {
  isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppStateType): MSTPType => {
  return {
    isAuth: state.auth.isAuth
  }
}

export const withAuthRedirectHOC = (Component: any) => {

  class RedirectComponent extends React.Component<any, any> {
    render() {

      return <Component {...this.props}/>
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

  return ConnectedAuthRedirectComponent
}*/


/*=====================ФУНКЦИОНАЛЬНАЯ КОМПОНЕНТА С ТИПИЗАЦИЕЙ=====*/

type MapStateToPropsType = {
  isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth
  }
}

export function withAuthRedirectHOC<T>(Component: ComponentType<T>) {

  const RedirectComponent = (props: MapStateToPropsType) => {

    //деструктиризация пропсов чтобы отделать все пропсы и isAuth. чтобы не передавать isAuth дальше в компоненту
    let {isAuth, ...restProps} = props

    if (!isAuth) {
      return <Redirect to={'/login'}/>
    }
    ;

    return <Component {...restProps as T}/>
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

  return ConnectedAuthRedirectComponent
}
