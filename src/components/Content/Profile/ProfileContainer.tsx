import React from 'react';
import Profile from './Profile';
import axios from "axios";
import {profileType, setUserProfile, toggleIsFetching} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import Preloader from "../common/preloader/Preloader";


//Типизируем мап стейт то пропс
type MSTPType = {
    profile: profileType
    isFetching: boolean
}

//типизируем мап диспатч то пропс
type MDTPType = {
    setUserProfile: (profile: profileType) => void
    toggleIsFetching: (isFetching: boolean) => void
}

//типизируем withRouter
type PathParamsType = {
    userId: string | undefined
}

//объединяем тип
export type ProfilePropsType = MSTPType & MDTPType & RouteComponentProps<PathParamsType>

//мап стейт то пропс
const mapStateToProps = (state: AppStateType): MSTPType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching
    }
}

let mapDispatchToProps: MDTPType = {
    setUserProfile,
    toggleIsFetching
}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.toggleIsFetching(false)

                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <div>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Profile profile={this.props.profile}/>
                }
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer))