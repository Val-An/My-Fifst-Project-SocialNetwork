import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";


const MyPosts = (props) => {
    let posts = props.profilePage.postsData.map(post => <Post id={post.id}
                                                              key={post.id}
                                                              message={post.message}
                                                              likesCount={post.like}/>)

    let addPost = (value) => {
        props.addPost(value.newPostText);
    }

    return (
        <div className={style.myPosts}>
            <div className={style.addPost}>
                <h3>My Posts</h3>
                <div>
                    <AddPostReduxForm onSubmit={addPost} />
                </div>
            </div>
            {posts}
        </div>
    );
}

const maxLength10 = maxLengthCreator(10)
const minLength2 = minLengthCreator(2)

const AddPostsForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" id="" placeholder="Enter your message"
                validate={[required, maxLength10, minLength2]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    </div>
}

const AddPostReduxForm = reduxForm ({form: "addPostForm"})(AddPostsForm)


export default MyPosts;