import React, { useEffect, useState } from 'react'
import { auth } from './firebase';
export default function ProtectedRoute(props) {
  const [user, setUser] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(true);
      } else setUser(false);
    })
  })

  if (user) return props.children;
  else return <div className='d-flex flex-column align-content-center justify-content-center vw-100 vh-100'>
    <h1>You are not logged in</h1>
    <a className="btn btn-primary" href="./login" role="button">Login</a>
  </div>
}
