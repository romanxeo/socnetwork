import {v1} from "uuid";
import {profileAPI} from "../api/api";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

export const addPostAC = () => {
  return {type: 'PROFILE/ADD-POST'} as const
}

export const addPostFormAC = (newPostText: string) => {
  return {type: 'PROFILE/ADD-POST-FORM', newPostText} as const
}

export const updateNewPostTextAC = (newText: string) => {
  return {type: 'PROFILE/UPDATE-NEW-POST-TEXT', newText} as const
}

export const setUserProfileAC = (profile: any) => {
  return {type: 'PROFILE/SET-USER-PROFILE', profile} as const
}

export const setStatusAC = (status: string) => {
  return {type: 'PROFILE/SET-STATUS', status} as const
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
  return {type: 'PROFILE/TOGGLE-IS-FETCHING', isFetching: isFetching} as const
}

export const deletePostAC = (id: string) => {
  return {type: 'PROFILE/DELETE-POST', id} as const
}

export const savePhotoSuccessAC = (photos: photosType) => {
  return {type: 'PROFILE/SET-PHOTO-SUCCESS', photos} as const
}

export const toggleIsEditProfileInfoAC = (isEditProfileInfo: boolean) => {
  return {type: 'PROFILE/TOGGLE-IS-EDIT-PROFILE-INGO', isEditProfileInfo} as const
}

export const saveProfileAC = (formData: any) => {
  return {type: 'PROFILE/SAVE-PROFILE-INGO', formData} as const
}

export type addPostAT = ReturnType<typeof addPostAC>
export type updateNewPostTextAT = ReturnType<typeof updateNewPostTextAC>
export type setUserProfileAT = ReturnType<typeof setUserProfileAC>
export type toggleIsFetchingAT = ReturnType<typeof toggleIsFetchingAC>
export type setStatusAT = ReturnType<typeof setStatusAC>
export type addPostFormAT = ReturnType<typeof addPostFormAC>
export type deletePostAT = ReturnType<typeof deletePostAC>
export type savePhotoSuccessAT = ReturnType<typeof savePhotoSuccessAC>
export type toggleIsEditProfileInfoAT = ReturnType<typeof toggleIsEditProfileInfoAC>
export type saveProfileAT = ReturnType<typeof saveProfileAC>

export type ActionTypes = addPostAT
    | updateNewPostTextAT
    | setUserProfileAT
    | toggleIsFetchingAT
    | setStatusAT
    | addPostFormAT
    | deletePostAT
    | savePhotoSuccessAT
    | toggleIsEditProfileInfoAT

//типизируем массив постов
export type PostsDataArray = {
  id: string
  name: string
  post: string
  likesCount: number
}
//типизируем стейт
export type contactsType = {
  facebook: string | null
  website: string | null
  vk: string | null
  twitter: string | null
  instagram: string | null
  youtube: string | null
  github: string | null
  mainLink: string | null
}
export type photosType = {
  small: string | null
  large: string | null
}
export type profileType = {
  aboutMe: string | null
  contacts: contactsType
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string | null
  userId: number
  photos: photosType
}
export type initialStateType = {
  postsData: Array<PostsDataArray>
  newPostText: string
  profile: profileType
  isFetching: boolean
  status: string
  isEditProfileInfo: boolean
}

//инициализируем стейт с данными
const initialState: initialStateType = {
  postsData: [
    {id: v1(), name: 'VALERA', post: 'HERLfdE', likesCount: 43},
    {id: v1(), name: 'Dimon', post: 'HERdsfLfdE', likesCount: 421},
    {id: v1(), name: 'Kukareku', post: 'HEfsdfRLfdE', likesCount: 13},
    {id: v1(), name: 'Stop', post: 'qweHERLfdE', likesCount: 5},
  ],
  newPostText: '',
  profile: {
    aboutMe: 'aboutMe',
    contacts: {
      facebook: 'facebook',
      website: 'website',
      vk: 'vk',
      twitter: 'twitter',
      instagram: 'instagram',
      youtube: 'youtube',
      github: 'github',
      mainLink: 'mainLink'
    },
    lookingForAJob: true,
    lookingForAJobDescription: 'lookingForAJobDescription',
    fullName: 'fullName',
    userId: 0,
    photos: {
      small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
      large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
    }
  },
  isFetching: false,
  status: '',
  isEditProfileInfo: false
}

//profileReducer
const profileReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
  switch (action.type) {

    case 'PROFILE/ADD-POST': {
      //создаем новый объект поста
      const newPost: PostsDataArray = {
        id: v1(),
        name: 'name',
        post: state.newPostText,
        likesCount: 0
      }
      //делаем глубокую копию объекта стейт и ретурним ее
      return {
        ...state,
        postsData: [...state.postsData, newPost], //делаем глубокую копию сообщений и в конец добавляем новой пост
        newPostText: ''
      }
    }

    case 'PROFILE/ADD-POST-FORM': {
      //создаем новый объект поста
      const newPost: PostsDataArray = {
        id: v1(),
        name: 'name',
        post: action.newPostText,
        likesCount: 0
      }
      //делаем глубокую копию объекта стейт и ретурним ее
      return {
        ...state,
        postsData: [...state.postsData, newPost], //делаем глубокую копию сообщений и в конец добавляем новой пост
        newPostText: ''
      }
    }

    case 'PROFILE/UPDATE-NEW-POST-TEXT': {
      //делаем копию стейта и вносим изменение обновление строки ввода нового поста и ретурним ее
      return {
        ...state,
        newPostText: action.newText
      }
    }

    case 'PROFILE/SET-USER-PROFILE': {
      return {...state, profile: action.profile}
    }

    case 'PROFILE/TOGGLE-IS-FETCHING': {
      return {...state, isFetching: action.isFetching}
    }

    case 'PROFILE/SET-STATUS': {
      return {...state, status: action.status}
    }

    case 'PROFILE/DELETE-POST': {
      return {
        ...state,
        postsData: state.postsData.filter(p => p.id != action.id)
      }
    }

    case 'PROFILE/SET-PHOTO-SUCCESS': {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      }
    }

    case 'PROFILE/TOGGLE-IS-EDIT-PROFILE-INGO': {
      return {
        ...state,
        isEditProfileInfo: action.isEditProfileInfo
      }
    }

    default: {
      //возращение стейта по дефолту если нет нужного типа
      return state;
    }
  }
}

//thunk
export const getUserProfileTC = (userId: string | undefined) => async (dispatch: any) => {
  dispatch(toggleIsFetchingAC(true));

  let response = await profileAPI.getProfile(userId)

  dispatch(toggleIsFetchingAC(false));
  dispatch(setUserProfileAC(response.data));

}

//thunk
export const getStatusTC = (userId: string | undefined) => async (dispatch: any) => {

  let response = await profileAPI.getStatus(userId)

  dispatch(setStatusAC(response.data));

}

//thunk
export const updateStatusTC = (userId: string | undefined, status: string) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status)

  if (response.data.resultCode === 0) {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data));
  }
}

//thunk
export const savePhotoTC = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file)

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccessAC(response.data.data.photos));
  }
}

//thunk //GOOD
export const saveProfileInfoTC = (formData: any) => async (dispatch: any, getState: () => AppStateType) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfileInfo(formData)

  if (response.data.resultCode === 0) {
    dispatch(getUserProfileTC(userId))
    dispatch(toggleIsEditProfileInfoAC(false))
  } else {
    debugger
    dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}))
  }

}

export default profileReducer;