import React from 'react';
import Profile from './Profile';
import {
  getUserProfile,
  getStatus,
  profileType,
  updateStatus,
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
  getUserProfile: (userId: string | undefined) => void
  getStatus: (userId: string | undefined) => void
  updateStatus: (userId: string | undefined, status: string) => void
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
  getUserProfile,
  getStatus,
  updateStatus
}


class ProfileContainer extends React.Component<ProfilePropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.myUserId;
    }
    this.props.getUserProfile(userId)

    this.props.getStatus(userId)
  }

  render() {

    return (
      <div>
        {this.props.isFetching
          ? <Preloader/>
          : <Profile
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            userId={this.props.myUserId}
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
