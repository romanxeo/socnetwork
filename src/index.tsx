import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";
import './index.css';
import App from './App';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}
                     dispatch={store.dispatch.bind(store)}
                    /*addPost={store.addPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}*/
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree);