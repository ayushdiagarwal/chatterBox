import { useState } from "react";
import {auth, googleProvider} from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import {useNavigate} from "react-router-dom";

export const Auth = () => {
    const navigate = useNavigate();

    const signinwithgoogle = async() => {
        try {
            await signInWithPopup(auth, googleProvider);
            console.log("signed In");
            navigate("/chat");
        }

        catch(err) {
            console.error(err);
        }
    }

    return (
        <> 
            <button onClick={signinwithgoogle}>Sign In</button>
        </>
    )

}
