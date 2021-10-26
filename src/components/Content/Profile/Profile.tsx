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
                ? <ProfileEditInfo/>
                : <ProfileInfo profile={profile}/>
            }

            {String(userId) === String(profile.userId)
                ? <div className={s.container}>
                    {!isEditProfileInfo &&
                    <button className={s.button} onClick={() => toggleIsEditProfileInfoAC(true)}>Edit Profile</button>
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