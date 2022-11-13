import { db } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";

// Create group
export const createGroupApi = async () => {
    await setDoc( doc(db, 'groups', 'one'), {
        admin: '123',
        freeze: 'false',
        server: '123.456.789'
    })
}
// Join group


