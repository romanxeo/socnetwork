//типы для редьюеров
const SET_USER_DATA = "SET_USER_DATA"

//типизируем стейт
export type initialStateType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean
}

//типизируем action который может приходить
export type ActionTypes = ReturnType<typeof setUserDataAC>

//инициализируем стейт с данными
let initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
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
            //возращение стейта по дефолту если нет нужного типа
            return state;
        }
    }
}

//экшн креейтор на логи
export const setUserDataAC = (userId: string, email: string, login: string) => {
    return (
        {type: SET_USER_DATA, data: {userId, email, login}}
    ) as const
}

export default authReducer;