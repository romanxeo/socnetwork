import React, {ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes, MouseEventHandler} from 'react';
import s from './Profile.module.css';
import {profileType} from "../../../redux/profileReducer";
import noavatar from "../../../assets/noavatar.png";
import imgAbout from '../../../assets/linkimg/about.png'
import imgJob from '../../../assets/linkimg/job.png'
import imgFB from '../../../assets/linkimg/facebook.png'
import imgWeb from '../../../assets/linkimg/site.png'
import imgVK from '../../../assets/linkimg/vk.png'
import imgTW from '../../../assets/linkimg/twitter.png'
import imgIG from '../../../assets/linkimg/instagram.png'
import imgYB from '../../../assets/linkimg/youtube.png'
import imgGH from '../../../assets/linkimg/git.png'
import imgGM from '../../../assets/linkimg/gmail.png'
import imgStatus from '../../../assets/linkimg/status.png'
import ProfileStatusWithHook from "./ProfileStatus/ProfileStatusWithHook";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileEditInfo from './ProfileEditInfo/ProfileEditInfo';

type propsType = {
    profile: profileType
    status: string
    updateStatus: (userId: string | undefined, status: string) => void
    userId: string | undefined
    savePhoto: (file: any) => void
    isEditProfileInfo: boolean
    toggleIsEditProfileInfoAC: (isEditProfileInfo: boolean) => void
}

const Profile: React.FC<propsType> = props => {

    const {
        profile,
        status,
        updateStatus,
        userId,
        savePhoto,
        isEditProfileInfo,
        toggleIsEditProfileInfoAC
    } = props

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.profile}>

            <div className={s.avatarBlock}>
                <img className={s.avatar}
                     src={profile.photos.large != null
                         ? profile.photos.large
                         : noavatar}
                     alt="img"/>


                {String(userId) === String(profile.userId)
                && <label className={s.label}> Enter Your File
                    <input className={s.input} type={'file'} onChange={onMainPhotoSelected} title={'LOAD'}/>
                </label>
                }
            </div>

            <div className={s.fullName}>{profile.fullName}</div>

            <div>
                <img className={s.descriptionImg} src={imgStatus}/>
                <ProfileStatusWithHook
                    status={status}
                    updateStatus={updateStatus}
                    myUserId={userId}
                    currentUserId={profile.userId}
                />
            </div>

            {isEditProfileInfo
                ? <ProfileInfo profile={profile}/>
                : <ProfileEditInfo profile={profile}/>
            }

            {/*{(profile.aboutMe != null)
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
                        className={s.descriptionSpan}> {profile.lookingForAJobDescription}</span>
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

            </div>*/}

            {/*           <div className={s.container}>
                <button className={s.button}>Message</button>
                <button className={s.button}>Subscribe</button>
            </div>*/}

            {String(userId) === String(profile.userId)
                ? <div className={s.container}>
                    {isEditProfileInfo
                        ?
                        <button className={s.button} onClick={() => toggleIsEditProfileInfoAC(false)}>Save Info</button>
                        : <button className={s.button} onClick={() => toggleIsEditProfileInfoAC(true)}>Edit
                            Profile</button>
                    }

                </div>
                : <div className={s.container}>
                    <button className={s.button}>Message</button>
                    <button className={s.button}>Subscribe</button>
                </div>
            }

        </div>
    )
}

export default Profile;