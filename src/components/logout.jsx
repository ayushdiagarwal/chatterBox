import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase-config";

export const Logout = () => {

    const navigate = useNavigate();
    const logout = async () => {
        try{
        await signOut(auth);
        console.log("signed out");
        navigate("/");

        }
        catch(err){
            console.error(err);
        }
    }

    return (
        <div>
            <button className="logout-btn" onClick={logout}> Logout </button>
        </div>
    );



}
