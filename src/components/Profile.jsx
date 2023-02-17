import React from 'react';
import MyPost from '../My_post/Mypost';
import ProfileInfo from './profileInfo/profileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost post={props.profilePage.post} addPost={props.addPost} newPostText={props.profilePage.newPostText} dispatchEvent={props.dispatchEvent} />
    </div>
  );
};

export default Profile;