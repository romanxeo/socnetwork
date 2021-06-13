import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    addPost: (post: string) => void
}

const NewPost = (props: PropsType) => {

    let [post, setPost] = useState('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPost(e.currentTarget.value);
    }

    const onClickHandler = () => {
        if (post !== "") {
            props.addPost(post);
            setPost("");
        }
    }

    return (
        <div>
            <div>NEW POST</div>
            <input value={post} onChange={onChangeHandler}></input>
            <button onClick={onClickHandler}>Add post</button>
        </div>
    )
}

export default NewPost;