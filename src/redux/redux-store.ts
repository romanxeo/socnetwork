import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

//комбинируем редюсеры
export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

//типизируем то что возвращает функция rootReducer
export type AppStateType = ReturnType<typeof rootReducer>

//создаем стор
const store = createStore(rootReducer);

export default store