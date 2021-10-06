import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header"
import Content from "./components/Content/Content"
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {compose} from 'redux';
import {initializeTC} from "./redux/appReducer";
import Preloader from "./components/Content/common/preloader/Preloader";

type MSTPType = {
  initialized: boolean
}

type MDTPType = {
  initializeTC: (isInitialized: boolean) => void;
}

export type AppPropsType = MSTPType & MDTPType

const MSTP = (state: AppStateType): MSTPType => {
  return {
    initialized: state.app.initialized
  }
}

const MDTP: MDTPType = {
  initializeTC,
}

class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializeTC(true);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default compose(
  connect(MSTP, MDTP)
)(App)
