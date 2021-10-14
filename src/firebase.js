import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDTcgFuShKJoOFHVl0WkVP2IGKfh4093eQ",
    authDomain: "chat-react2729.firebaseapp.com",
    projectId: "chat-react2729",
    storageBucket: "chat-react2729.appspot.com",
    messagingSenderId: "250785269421",
    appId: "1:250785269421:web:defef59e978e542d456824",
    measurementId: "G-M5CLBPSLYS"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app)

