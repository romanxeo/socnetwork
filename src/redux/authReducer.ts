//типы для редьюеров
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
                ...action.data,
                isAuth: true
            };
        }
        default: {
            return state;
        }
    }
}

//экшн креейтор на логи
export const setAuthUserData = (userId: string, login: string, email: string) => {
    return (
      {
          type: SET_USER_DATA,
          data: {userId, login, email}
      }
    ) as const
}

//thunk
export const getAuthUserData = () => {
    return (dispatch: any) => {
        authAPI.authMe()
          .then(response => {
              if (response.data.resultCode === 0) {
                  let {id, login, email} = response.data.data;
                  dispatch(setAuthUserData(id, login, email));
              }
          })
    }
}

export default authReducer;