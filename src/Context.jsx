import React, { useState } from "react";

export const AuthContext = React.createContext();

export function AuthContextFunction({ children }) {
  const [isAuth, setIsAuth] = useState(true);

  const toggle = () => {
    return setIsAuth(isAuth === true ? false : true);
  };
  return (
    <AuthContext.Provider value={[isAuth, toggle]}>
      {children}
    </AuthContext.Provider>
  );
}
// export default function AppContextProviderFunction ({children}){
//   const [state,setState]=useState("dark")

//   function Toggle (){
//     console.log("car")
//    return (
//      setState(state==="dark" ? "light" : "dark")
//    )
//   }

//   return (
//     <AppContext.Provider value={[state,Toggle]}>
//       {children}
//     </AppContext.Provider>
//   )
// }
