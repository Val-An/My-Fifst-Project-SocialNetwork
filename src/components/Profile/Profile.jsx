import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../Redux/state";

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <div>
                <img className={style.profileImg}
                     src="https://parksadventure.com/wp-content/uploads/2017/10/header-image-1-2.png"
                     alt=""/>
            </div>
            <div className={style.profileMain}>
                <ProfileInfo/>
                <MyPosts profilePage={props.profilePage}
                         dispatch={props.dispatch}/>
            </div>
        </div>
    );
}

export default Profile;