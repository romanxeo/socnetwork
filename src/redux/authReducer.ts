//типы для редьюеров
import {stopSubmit} from "redux-form";
import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"

//типизируем стейт
export type initialStateType = {
    userId: string | undefined
    login: string | null
    email: string | null
    isAuth: boolean
    isFetching: boolean
}

//типизируем action который может приходить
export type ActionTypes = ReturnType<typeof setAuthUserData>

//инициализируем стейт с данными
let initialState: initialStateType = {
    userId: undefined,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false
}

//dialogsReducer
const authReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            };
        }
        default: {
            return state;
        }
    }
}

//экшн креейтор на логи
export const setAuthUserData = (userId: string | undefined, login: string | null, email: string | null, isAuth: boolean) => {
  return (
    {
      type: SET_USER_DATA,
      payload: {userId, login, email, isAuth},
    }
  ) as const
}

//thunk
export const getAuthUserData = () => {
    return (dispatch: any) => {
      authAPI.me()
        .then(response => {
          if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, login, email, true));
          }
        })
    }
}

//thunk
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {

  authAPI.login(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
      } else {
        if (response.data.messages.length > 0) {
          dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
        } else {
          dispatch(stopSubmit('login', {_error: 'some error'}))
        }
      }
    })
}

//thunk
export const logout = () => (dispatch: any) => {
  debugger
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(undefined, null, null, false));
      }
    })
}

export default authReducer;