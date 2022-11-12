import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth' 

// Register 
export const registerApi = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        return user;
    })
  .catch((error) => {
      return error;
    });
}

// Login
export const loginApi = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        return user;
    })
  .catch((error) => {
      return error;
    });
}
    
// Forgot Password
