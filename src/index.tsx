import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Masha'},
    {id: 3, name: 'Pasha'},
    {id: 4, name: 'Dasha'},
    {id: 5, name: 'Sveta'},
    {id: 6, name: 'SANEK'},
]

let postsData = [
    {id: 1, name: 'VALERA', post: 'HERLfdE', likesCount: 43},
    {id: 2, name: 'Dimon', post: 'HERdsfLfdE', likesCount: 421},
    {id: 3, name: 'Kukareku', post: 'HEfsdfRLfdE', likesCount: 13},
    {id: 4, name: 'Stop', post: 'qweHERLfdE', likesCount: 5},

]

let messagesData = [
    {id: 1, message: 'HERLE'},
    {id: 2, message: 'MASHA'},
    {id: 3, message: 'VALERCHI PRIYOM'},
    {id: 4, message: 'SUCHARA'},
    {id: 5, message: 'fdsfdf5435s erwtgaa'},
    {id: 6, message: 'eFGSGA DSFDSGA'},
]

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App dialogsData={dialogsData} postsData={postsData} messagesData={messagesData}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
