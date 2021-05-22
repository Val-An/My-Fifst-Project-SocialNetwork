import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "../Common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field type="text" placeholder={"Email"} name={"email"} component={Input}
                   validate={[required]}/>
        </div>
        <div>
            <Field type="password" placeholder={"Password"} name={"password"} component={Input}
                   validate={[required]}/>
        </div>
        <div>
            <Field type="checkbox" name={"rememberMe"} component={Input}/> remember me
        </div>
        <div>
            {props.error && <span className={style.formSummaryError}>{props.error}</span>}
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);