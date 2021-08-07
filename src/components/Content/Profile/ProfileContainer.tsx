import React from 'react';
import Profile from './Profile';
import axios from "axios";
import {initialStateType, PostsDataArray, profileType, setUserProfile} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


//Типизируем мап стейт то пропс
type MSTPPropsType = initialStateType;

//типизируем мап диспатч то пропс
type mdtpType = {
    setUserProfile: (profile: profileType) => void
}

//объединяем тип
export type ProfilePropsType = MSTPPropsType & mdtpType

//мап стейт то пропс
const mapStateToProps = (state: AppStateType): MSTPPropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

let mdtp: mdtpType = {
    setUserProfile
}

class ProfileContainerC extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/15`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
                {this.props.profile.lookingForAJobDescription}
                {this.props.profile.aboutMe}
            </div>

        )
    }
}

export const ProfileContainer = connect(mapStateToProps, mdtp)(ProfileContainerC)