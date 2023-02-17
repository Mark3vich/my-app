import React from 'react';
import classes from '../components/components_css/Mypost.module.css';
import Post from './Post/Post';
import {addPostActionCreator} from '../components/redux/state';
import {updateNewPostText} from '../components/redux/state';


const MyPost = (props) => {
    let postsElements = props.post.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatchEvent(addPostActionCreator());
    }

    let onChangePost = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostText(text);
        props.dispatchEvent(action);
    }

    return (
        <div className={classes.post}>
            <div className={classes.postBlock}>
                <h3>My Post</h3>
                <div>
                    <textarea onChange={onChangePost} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <button onClick={addPost}>Add Post</button>
                <button>Remove</button>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
};

export default MyPost;