import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

//комбинируем редюсеры
export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

//типизируем то что возвращает функция rootReducer
export type AppStateType = ReturnType<typeof rootReducer>

//создаем стор
const store = createStore(rootReducer);

export default store