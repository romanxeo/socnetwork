import React, {ChangeEvent} from 'react';

type PropsType = {
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const NewPost = (props: PropsType) => {

    let postText = React.createRef<HTMLTextAreaElement>();

    const onCLickHandler = () => {
        if (postText.current) {

        }
        props.addPost()
    }

    let onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }

    return (
        <div>
            <div>NEW POST</div>
            <textarea onChange={onPostChangeHandler} value={props.newPostText}/>
            <button onClick={onCLickHandler}>Add post</button>
        </div>
    )
}

export default NewPost;