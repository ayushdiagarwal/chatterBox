import { useEffect, useState } from "react"
import { db } from "../../config/firebase-config"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { auth } from "../../config/firebase-config";
import "./css/messages.css";

export function Messages() {
    // read from the database

    const [messages, setMessages] = useState([]);
    const messagesRef = collection(db, "messages");
    const currentUser = auth.currentUser;

    useEffect(() => {
        const q = query(messagesRef, orderBy("timestamp", "asc"));
        // Set up real-time listener
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const messagesData = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            setMessages(messagesData);
        });

        // Clean up listener on unmount
        return () => unsubscribe();
    }, []);

    // need to add a check the user

    return (
        <>
            {messages.map((msg) => (
                    <div key={msg.id} className={msg.userId == currentUser.uid ? "mine msg" : "others msg"}>{msg.text}</div>
            ))}
        </>
    )
}

export default Messages;