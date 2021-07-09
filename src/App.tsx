import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header"
import Content from "./components/Content/Content"
import {StateType, ActionTypes} from "./redux/store";


type PropsType = {
    state: StateType
    dispatch: (action: ActionTypes) => void
    /* addPost: () => void
     updateNewPostText: (newText: string) => void*/
}

const App = (props: PropsType) => {
    return (
        <div>
            <Header/>
            <Content state={props.state}
                     dispatch={props.dispatch}
                /*addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}*/
            />
        </div>
    );
}

export default App;
