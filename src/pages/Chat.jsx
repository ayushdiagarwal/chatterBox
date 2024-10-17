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
            <div className="col">    
                <div className="messages"> 
                    <Messages />
                </div>
                <MessageBox />
            </div>
        </>
    );
}

export default Chat;