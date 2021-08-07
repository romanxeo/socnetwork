import React from 'react';
import s from './Profile.module.css';
import {profileType} from "../../../redux/profileReducer";


const Profile = (props: any) => {
    return (
        <div className={s.profile}>
            Profile;
            <img src={props.profile.photos.large}/>
            {props.profile.lookingForAJobDescription}
            {props.profile.aboutMe}
            AVA + DESCRIPTION
        </div>
    )
}

export default Profile;