import "../assets/css/chat.css";
import { Logout } from "../components/logout";
import Messages from "../components/messages";
import MessageBox from "../components/messageBox";

function Chat() {
    return (
        <>
            <div className="row">
                <h1>ChatterBox</h1>
                <Logout />
            </div>      
            <Messages />
            <MessageBox />
        </>
    );
}

export default Chat;