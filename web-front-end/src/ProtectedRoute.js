import React, {useEffect, useState} from 'react'
import { auth } from './firebase';

export default function ProtectedRoute(props) {
  const [user, setUser] = useState(false);
  useEffect( () => {
    auth.onAuthStateChanged((user) => {
      if (user){
        setUser(true);
      }else setUser(false);
    })
  })

  if (user) return props.children;
  else return <>
    <h1>You are not logged in</h1>
    <button href="/login">Login</button>
  </>
}
