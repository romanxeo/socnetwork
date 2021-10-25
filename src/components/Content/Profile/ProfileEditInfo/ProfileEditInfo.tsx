import {profileType} from "../../../../redux/profileReducer";
import React from "react";

type TProps = {
    profile: profileType
}

const ProfileEditInfo: React.FC<TProps> = props => {

    const {
        profile
    } = props

    return (
        <div>
            EDIT ON
        </div>
    )
}

export default ProfileEditInfo