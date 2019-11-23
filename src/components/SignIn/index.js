import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose"

import * as ROUTES from "../../constants/routes";
import { firebase } from "../Firebase";

// const SignInPage = () => (
//     <div>
//         <h1>Sign In</h1>
//         <SignUpLink />
//     </div>
// );



export default class SignInFormBase extends Component {

    state = {
        email: "",
        password: "",
        error: null
    };

    onSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        console.log('SIGNING IN USER')
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                // this.setState({ ...state });
                this.props.history.push(ROUTES.HOME)
            })
            .catch(error => {
                this.setState({ error })
            });


    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="text"
                />

                <button disabled={isInvalid} type="submit">Sign In</button>
                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

// const SignUpLink = () => (
//     <p>
//         Don't Have An Accout? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
//     </p>
// );

// const SignInForm = withRouter(SignInFormBase);

// export default SignInPage

// export { SignInForm, SignUpLink };