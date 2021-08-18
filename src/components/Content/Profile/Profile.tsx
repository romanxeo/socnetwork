import React from 'react';
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
import {Redirect} from "react-router-dom";

type propsType = {
  profile: profileType
}

const Profile = (props: propsType) => {

  return (
    <div className={s.profile}>
      <img className={s.avatar}
           src={props.profile.photos.large != null
             ? props.profile.photos.large
             : noavatar}
           alt="img"/>

      <div className={s.fullName}>{props.profile.fullName}</div>


      {(props.profile.aboutMe != null)
        ? <div className={s.aboutMe}>
          <img className={s.descriptionImg} src={imgAbout}/>
          <span className={s.descriptionSpan}> {props.profile.aboutMe}</span>
        </div>
        : <></>
      }

      {(props.profile.lookingForAJob)
        ? <div className={s.aboutMe}>
          <img className={s.descriptionImg} src={imgJob}/>
          <span
            className={s.descriptionSpan}> {props.profile.lookingForAJobDescription}</span>
        </div>
        : <></>
      }

      <div className={s.container}>
        {(props.profile.contacts.facebook != null)
          ? <a href={props.profile.contacts.facebook}><img src={imgFB}
                                                           className={s.linkImg}/></a>
          : <></>}

        {(props.profile.contacts.website != null)
          ? <a href={props.profile.contacts.website}><img src={imgWeb}
                                                          className={s.linkImg}/></a>
          : <></>}

        {(props.profile.contacts.vk != null)
          ? <a href={props.profile.contacts.vk}><img src={imgVK}
                                                     className={s.linkImg}/></a>
          : <></>}

        {(props.profile.contacts.twitter != null)
          ? <a href={props.profile.contacts.twitter}><img src={imgTW}
                                                          className={s.linkImg}/></a>
          : <></>}

        {(props.profile.contacts.instagram != null)
          ? <a href={props.profile.contacts.instagram}><img src={imgIG}
                                                            className={s.linkImg}/></a>
          : <></>}

        {(props.profile.contacts.youtube != null)
          ? <a href={props.profile.contacts.youtube}><img src={imgYB}
                                                          className={s.linkImg}/></a>
          : <></>}

        {(props.profile.contacts.github != null)
          ? <a href={props.profile.contacts.github}><img src={imgGH}
                                                         className={s.linkImg}/></a>
          : <></>}

        {(props.profile.contacts.mainLink != null)
          ? <a href={props.profile.contacts.mainLink}><img src={imgGM}
                                                           className={s.linkImg}/></a>
          : <></>}

      </div>

      <div className={s.container}>
        <button className={s.button}>Message</button>
        <button className={s.button}>Subscribe</button>
      </div>

    </div>
  )
}

export default Profile;