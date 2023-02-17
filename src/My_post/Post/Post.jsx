import React from 'react';
import classes from '../../components/components_css/Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.photo}>
                <img src="https://img.desktopwallpapers.ru/nature/pics/wide/1920x1200/849ec9470d6af3370b7526f08a3ef9dc.jpg" />
            </div>
            <p>{props.message}</p>
            <p>{props.likesCount}</p>
        </div>
    );
};

export default Post;
