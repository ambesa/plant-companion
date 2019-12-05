import React from 'react';
import { auth, provider} from '../Firebase'
import * as ROUTES from "../../constants/routes"

// import { withFirebase } from "../Firebase"

function SignOutButton({ firebase }) {
    function signOut(event) {
        event.preventDefault()
        auth.signOut()
        .then(function () {
            window.location.pathname = ROUTES.LANDING
        }).catch(function (error) {
            // An error happened.
        });
    }
    return (
        <button type="button" onClick={signOut}>
            Sign Out
        </button>
    )
}





export default SignOutButton;