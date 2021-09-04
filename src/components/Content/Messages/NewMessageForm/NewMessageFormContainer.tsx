import React from 'react'
import {connect} from "react-redux";
import {compose} from "redux"
import {addMessageFormAC} from '../../../../redux/dialogsReducer'
import NewMessageForm from './NewMessageForm';

type MDTPType = {
  addMessageFormAC: (newMessageText: string) => void
}

export type NewMessagePropsType = MDTPType

let MDTP: MDTPType = {
  addMessageFormAC
}

export const NewMessageFormContainer = compose<React.ComponentType>(
  connect(null, MDTP)
)(NewMessageForm)
