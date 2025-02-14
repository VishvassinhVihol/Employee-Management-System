//Context no upyog data ne centralized karva mate thay chhe.to je component ne data ni jarur pade  te ahi thi lai shake chhe

//aa AuthContext ma employee nu name,email te badhu raheshe

// export default function AuthContext(){
//     return (
//         <div>
//             <h2>AuthContext</h2>
//             {/* in main.jsx App ne AuthContext ma wrap karya bad App no content nahi dekhay */}
//         </div>
//     )
// }

// if you want ke App no content dekhay to

import React, { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage"

export const AuthContext = createContext()// we are creating AuthContext.This context is used to share data (like authentication status) across multiple components without needing to pass props manually at every level. 
export default function AuthProvider({children}){
    // localStorage.clear()
    useEffect(() => {
        setLocalStorage()
    },[])

    let [userData,setUserData] = useState(null)
    let {employees,admin} = getLocalStorage()
    
    
    
    useEffect(() => {
        setUserData({employees,admin})
    },[])
    
    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>{/*now aa value je je component aana andar chhe te access kari shake chhe */}
             <h2>{children}</h2>
            {/* in main.jsx App ne AuthContext ma wrap karya bad App no content nahi dekhay */}
            </AuthContext.Provider>
        </div>
    )
}