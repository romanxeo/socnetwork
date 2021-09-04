import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {NewMessagePropsType} from "./NewMessageFormContainer";

const NewMessageForm = (props: any) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field placeholder={'Enter your message'} component={'textarea'}
             name={'newMessageText'}/>
    </div>
    <div>
      <button>Add Message from FORM</button>
    </div>
  </form>
}

export const NewMessageReduxForm = reduxForm({
  form: 'newMessage'
})(NewMessageForm)


const NewMessage = (props: NewMessagePropsType) => {
  const onSubmit = (formData: any) => {
    props.addMessageFormAC(formData.newMessageText)
  }

  return (
    <div>
      <b>New message</b>
      <NewMessageReduxForm onSubmit={onSubmit}/>
    </div>
  )
};

export default NewMessage
