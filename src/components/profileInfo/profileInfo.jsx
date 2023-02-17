import React from 'react';
import classes from '../components_css/ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://foto.krasnoturinsk.me/cpg/albums/userpics/10073/P1020597.jpg" />
            </div>
            <div className={classes.descriptionBlock}>
                <p>ava + description</p>
                <div>
                    <p>My post</p>
                    <div>
                        <p>New post</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;