import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";

export const withSuspense = (Component: ComponentType) => {
  return (props: any) => {
    return <React.Suspense fallback={<div>Loading...</div>}>
      <Component {...props}/>
    </React.Suspense>
  }
}
