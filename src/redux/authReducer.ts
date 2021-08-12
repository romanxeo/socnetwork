//типы для редьюеров
const SET_USER_DATA = "SET_USER_DATA"

//типизируем стейт
export type initialStateType = {
    userId: string | null
    login: string | null
    email: string | null
    isAuth: boolean
    isFetching: boolean
}

//типизируем action который может приходить
export type ActionTypes = ReturnType<typeof setUserData>

//инициализируем стейт с данными
let initialState: initialStateType = {
    userId: null,
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
export const setUserData = (userId: string, login: string, email: string) => {
    return (
      {
          type: SET_USER_DATA,
          data: {userId, login, email}
      }
    ) as const
}

export default authReducer;