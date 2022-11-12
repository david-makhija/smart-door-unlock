import { auth } from "../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth' 

// Register 


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
