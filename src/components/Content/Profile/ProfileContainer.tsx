import React from 'react';
import Profile from './Profile';
import {
  getUserProfile,
  profileType,
} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import Preloader from "../common/preloader/Preloader";


//Типизируем мап стейт то пропс
type MSTPType = {
  profile: profileType
  isFetching: boolean
  myUserId: string | undefined
  isAuth: boolean

}

//типизируем мап диспатч то пропс
type MDTPType = {
  getUserProfile: (userId: string | undefined) => void
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
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps: MDTPType = {
  getUserProfile,
}

class ProfileContainer extends React.Component<ProfilePropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.myUserId;
    }
    this.props.getUserProfile(userId)
  }

  render() {

    if (!this.props.isAuth) {
      return <Redirect to={'/login'}/>
    }
    ;

    return (
      <div>
        {this.props.isFetching
          ? <Preloader/>
          : <Profile
            profile={this.props.profile}
          />
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer))