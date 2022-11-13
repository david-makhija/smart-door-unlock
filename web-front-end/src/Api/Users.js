import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'

// Register 
export const registerApi = (email, password, confirmPassword, firstName, lastName) => {
  if (password !== confirmPassword){
    toast.error("Passwords do not match.")
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      toast.success("Account created")
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      console.log(error.code)
      switch(error.code){
        case 'auth/weak-password':
          toast.info("The password must have atleast 6 characters")
          return;
        case 'auth/email-already-in-use':
          toast.error("This email is already registered.")
          return;
        default:
          toast.error("Some error occured in auth, try again!")
          return;
      }
    });
}

// Login
export const loginApi = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      return user;
    })
    .catch((error) => {
      window.alert("Err occured", error)
    });
}

// Forgot Password
