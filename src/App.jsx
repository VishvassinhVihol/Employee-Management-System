import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

import { AuthContext } from "./context/AuthProvider";
 

export default function App(){
    // useEffect(() => {
        //     // setLocalStorage()
        //     getLocalStorage()
        // })
        
        let [user,setUser] = useState(null)//to keep track who is currUser
        let [loggedInUserData,setLoggedInUserData] = useState(null)//to store data of currUser
        let [userData,setUserData] = useContext(AuthContext)//useContext-to use value provided by parent context
        
        
        useEffect(() => {
            
                const loggedUser = localStorage.getItem('loggedUser')
                // console.log(loggedUser);
                if(loggedUser){
                    let userData = JSON.parse(loggedUser)
                    
                    setUser(userData.role)
                    setLoggedInUserData(userData.data)
                }
                
          
        },[])

    function handler(email,password){
        if(userData.admin && userData.admin.find(e => e.email == email && e.password == password)){
            let admin = userData.admin.find(e => e.email == email && e.password == password);
            setLoggedInUserData(admin)
            localStorage.setItem('loggedUser',JSON.stringify({role:'admin',data:admin}))
            setUser('admin')
            
        }
        else if(userData.employees && userData.employees.find(e => e.email == email && e.password == password)){
            let employee = userData.employees.find(e => e.email == email && e.password == password)
            setLoggedInUserData(employee)
            localStorage.setItem('loggedUser',JSON.stringify({role:'employee',data:employee}))
            setUser('employee')
            
        }
        else{
            alert('invalid credentials')
        }
    }
  
    
    
    return(
        <>
        
            {!user ? <Login handler={handler}/> : ''}
            {user == 'employee' ? <EmployeeDashboard data={loggedInUserData} changeUser = {setUser} /> : ''}
            {user == 'admin' ? <AdminDashboard data={loggedInUserData} changeUser = {setUser} /> : ''}
        </>
    );
}