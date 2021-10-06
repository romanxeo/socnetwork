//типы для редьюеров
import {stopSubmit} from "redux-form";
import {authAPI} from "../api/api";

export const setAuthUserDataAC = (userId: string | undefined, login: string | null, email: string | null, isAuth: boolean) => {
  return {
    type: "AUTH/SET_USER_DATA",
    payload: {userId, login, email, isAuth}
  } as const
}

export type setAuthUserDataAT = ReturnType<typeof setAuthUserDataAC>

export type ActionTypes = setAuthUserDataAT

//типизируем стейт
export type initialStateType = {
  userId: string | undefined
  login: string | null
  email: string | null
  isAuth: boolean
  isFetching: boolean
}

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
    case "AUTH/SET_USER_DATA": {
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


//thunk
export const getAuthUserData = () => async (dispatch: any) => {

  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let {id, login, email} = response.data.data;
    dispatch(setAuthUserDataAC(id, login, email, true));
  }
}

//thunk
export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {

  let response = await authAPI.login(email, password, rememberMe)

  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    if (response.data.messages.length > 0) {
      dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
    } else {
      dispatch(stopSubmit('login', {_error: 'some error'}))
    }
  }

}

//thunk
export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout()

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserDataAC(undefined, null, null, false));
  }

}

export default authReducer;