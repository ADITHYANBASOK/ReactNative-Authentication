import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React,{ useState, createContext, useEffect } from 'react'

const AuthContext =createContext()
function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    checkLogin();
  }, []);

  function checkLogin() {
    onAuthStateChanged(auth, (user) => {
      console.log('Auth state changed:', user);

      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
  }
  return (
    <>
      <AuthContext.Provider value={{ user }}>
      {props.children}
     </AuthContext.Provider>
    </>
  )
}

export { AuthContext, AuthProvider };
