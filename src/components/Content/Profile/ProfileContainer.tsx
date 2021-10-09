import React from 'react';
import Profile from './Profile';
import {
  getUserProfileTC,
  getStatusTC,
  profileType,
  updateStatusTC,
  savePhotoTC
} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirectHOC} from '../common/hoc/AuthRedirectHOC';
import {compose} from 'redux';


//Типизируем мап стейт то пропс
type MSTPType = {
  profile: profileType
  isFetching: boolean
  myUserId: string | undefined
  status: string
}

//типизируем мап диспатч то пропс
type MDTPType = {
  getUserProfileTC: (userId: string | undefined) => void
  getStatusTC: (userId: string | undefined) => void
  updateStatusTC: (userId: string | undefined, status: string) => void
  savePhotoTC: (file: any) => void
}

//типизируем withRouter
type PathParamsType = {
  userId: string | undefined
}

//объединяем тип
export type ProfilePropsType =
  MSTPType
  & MDTPType
  & RouteComponentProps<PathParamsType>

//мап стейт то пропс
const mapStateToProps = (state: AppStateType): MSTPType => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    myUserId: state.auth.userId,
    status: state.profilePage.status
  }
}

let mapDispatchToProps: MDTPType = {
  getUserProfileTC,
  getStatusTC,
  updateStatusTC,
  savePhotoTC
}


class ProfileContainer extends React.Component<ProfilePropsType> {

  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.myUserId;
    }
    this.props.getUserProfileTC(userId)

    this.props.getStatusTC(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProp: ProfilePropsType, prevState: any, snapshot: any) {
    if (this.props.match.params.userId != prevProp.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {

    return (
      <div>
        {this.props.isFetching
          ? <Preloader/>
          : <Profile
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatusTC}
            userId={this.props.myUserId}
            savePhoto={this.props.savePhotoTC}
          />
        }
      </div>
    )
  }
}


export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirectHOC,
)(ProfileContainer)
