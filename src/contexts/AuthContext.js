import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'

const GoogleAuthContext = React.createContext()

export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
      clientId:process.env.REACT_APP_GOOGLE_CLIENT_ID
    // clientId: '621923475153-3h6n3pe6hseoh1lbf0dvqgs0kpf7qlng.apps.googleusercontent.com', // Your clientID from Google.
  })

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)