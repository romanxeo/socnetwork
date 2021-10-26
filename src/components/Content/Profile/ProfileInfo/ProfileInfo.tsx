import React, {ChangeEvent, useEffect, useState} from 'react'
import s from "../Profile.module.css";
import imgAbout from "../../../../assets/linkimg/about.png";
import imgJob from "../../../../assets/linkimg/job.png";
import imgFB from "../../../../assets/linkimg/facebook.png";
import imgWeb from "../../../../assets/linkimg/site.png";
import imgVK from "../../../../assets/linkimg/vk.png";
import imgTW from "../../../../assets/linkimg/twitter.png";
import imgIG from "../../../../assets/linkimg/instagram.png";
import imgYB from "../../../../assets/linkimg/youtube.png";
import imgGH from "../../../../assets/linkimg/git.png";
import imgGM from "../../../../assets/linkimg/gmail.png";
import {profileType} from "../../../../redux/profileReducer";

type TProps = {
    profile: profileType
}

const ProfileInfo: React.FC<TProps> = props => {

    const {
        profile
    } = props

    //let [editModeAboutMe, setEditModeAboutMe] = useState<boolean>(false);
    //let [aboutMeText, setAboutMe] = useState<string>(status);

    return (
        <div>
            {(profile.aboutMe != null)
                ? <div className={s.aboutMe}>
                    <img className={s.descriptionImg} src={imgAbout}/>
                    <span className={s.descriptionSpan}> {profile.aboutMe}</span>
                </div>
                : <></>
            }

            {(profile.lookingForAJob)
                ? <div className={s.aboutMe}>
                    <img className={s.descriptionImg} src={imgJob}/>
                    <span
                        className={s.descriptionSpan}> {profile.lookingForAJobDescription}
                    </span>
                </div>
                : <></>
            }

            <div className={s.container}>
                {(profile.contacts.facebook != null)
                    ? <a href={profile.contacts.facebook}>
                        <img src={imgFB} className={s.linkImg}/>
                    </a>
                    : <></>}

                {(profile.contacts.website != null)
                    ? <a href={profile.contacts.website}>
                        <img src={imgWeb} className={s.linkImg}/>
                    </a>
                    : <></>}

                {(profile.contacts.vk != null)
                    ? <a href={profile.contacts.vk}>
                        <img src={imgVK} className={s.linkImg}/>
                    </a>
                    : <></>}

                {(profile.contacts.twitter != null)
                    ? <a href={profile.contacts.twitter}>
                        <img src={imgTW} className={s.linkImg}/>
                    </a>
                    : <></>}

                {(profile.contacts.instagram != null)
                    ? <a href={profile.contacts.instagram}>
                        <img src={imgIG} className={s.linkImg}/>
                    </a>
                    : <></>}

                {(profile.contacts.youtube != null)
                    ? <a href={profile.contacts.youtube}>
                        <img src={imgYB} className={s.linkImg}/>
                    </a>
                    : <></>}

                {(profile.contacts.github != null)
                    ? <a href={profile.contacts.github}>
                        <img src={imgGH} className={s.linkImg}/>
                    </a>
                    : <></>}

                {(profile.contacts.mainLink != null)
                    ? <a href={profile.contacts.mainLink}>
                        <img src={imgGM} className={s.linkImg}/>
                    </a>
                    : <></>}

            </div>
        </div>
    )

}

export default ProfileInfo