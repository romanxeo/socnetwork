import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'

//комбинируем редюсеры
export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

//типизируем то что возвращает функция rootReducer
export type AppStateType = ReturnType<typeof rootReducer>

//создаем стор
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store


// @ts-ignore
window.store = store