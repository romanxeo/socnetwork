import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {NewPostPropsType} from "./NewPostFormContainer";
import {
  maxLengthCreator,
  requiredField
} from "../../../../utils/validators/validators";
import {TextArea} from "../../common/formsControls/FormsControl";

const maxLength10 = maxLengthCreator(10)

const NewPostForm = (props: any) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field
        placeholder={'Enter your post'}
        component={TextArea}
        name={'newPostText'}
        validate={[requiredField, maxLength10]}
      />
    </div>
    <div>
      <button>Add Post from FORM</button>
    </div>
  </form>
}

export const NewPostReduxForm = reduxForm({
  form: 'newPost'
})(NewPostForm)


const NewPost = (props: NewPostPropsType) => {
  const onSubmit = (formData: any) => {
    props.addPostFormAC(formData.newPostText)
  }

  return (
    <div>
      <b>New Post</b>
      <NewPostReduxForm onSubmit={onSubmit}/>
    </div>
  )
};

export default NewPost
