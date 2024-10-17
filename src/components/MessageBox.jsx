import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../config/firebase-config";
import { auth } from "../../config/firebase-config";
import "./css/MessageBox.css";

export function MessageBox() {

    const [newMessage, setnewMessage] = useState("");
    const messagesRef = collection(db, "messages");
    const currentUser = auth.currentUser;

    const onSubmitMsg = async() => {
        if (!newMessage.trim()) return; // Prevent empty messages


        try {
            await addDoc(messagesRef, { text: newMessage, timestamp: serverTimestamp(), userId: currentUser.uid});
            console.log("Message added:", newMessage);
            setnewMessage(""); // Clear input
          } catch (error) {
            console.error("Error adding document: ", error);
          }
        // Reload messages now
    }

    return (
        <>

            <div class="input-wrapper">
                <input type="text" name="text" className="input" placeholder="type message" onChange={(e) => setnewMessage(e.target.value)}/>
                <button className="send-btn" onClick={onSubmitMsg}>Send</button>
            </div>

        </> 
    )
}

export default MessageBox;