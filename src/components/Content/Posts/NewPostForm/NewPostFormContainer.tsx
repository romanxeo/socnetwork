import React from 'react'
import {connect} from "react-redux";
import {compose} from "redux"
import NewPostForm from './NewPostForm';
import {addPostFormAC} from "../../../../redux/profileReducer";

type MDTPType = {
  addPostFormAC: (newPostText: string) => void
}

export type NewPostPropsType = MDTPType

let MDTP: MDTPType = {
  addPostFormAC
}

export const NewPostFormContainer = compose<React.ComponentType>(
  connect(null, MDTP)
)(NewPostForm)
