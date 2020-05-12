import React, {PureComponent} from 'react';
import p from "./MyPosts.module.css";
import MyPost from "./Post1/MyPost";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControl/FormControl";






const MyPosts = React.memo(props => {



     const addNewPost = (value) => {
        props.add(value.addNewPost);
    }



    let PostElements = props.Posts.map(Posts => <MyPost inf={Posts.messege}/>);
    let newPostElement =React.createRef();

    return (<div>
            My posts
            <PostFormRedux onSubmit={addNewPost}/>
            {PostElements}
            <MyPost/>

        </div>
    )
});

const maxLength10= maxLengthCreator(10);

const PostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate = {[required, maxLength10]} component={Textarea} name={"addNewPost"} plaseholder={"post"} />
        </div>
        <div>
            <button>Add</button>
        </div>
    </form>
}

const PostFormRedux = reduxForm ({form:"newPost"})(PostForm);

export default MyPosts;
