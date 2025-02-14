import { useState } from "react"

export default function Login({handler}){
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')

    function updateEmail(e){
        setEmail(e.target.value)
    }
    function updatePassword(e){
        setPassword(e.target.value)
    }
    function submitHandler(e){
        e.preventDefault();
        

        handler(email,password)
        
        setEmail('')
        setPassword('')
    }

    return (
        <div className="h-screen flex  items-center justify-center ">
            
            <div className=" border-2 border-emerald-500 md:p-28 py-20 px-5 rounded-xl" >
                <form className="flex  flex-col items-center justify-center " onSubmit={submitHandler}>
                    <input className="border-2 border-emerald-500 py-2 px-10 rounded-full outline-none text-xl bg-transparent" type="email" placeholder="Enter your email" value={email} onChange={updateEmail}/>
                    <input className="border-2 border-emerald-500 py-2 px-10 rounded-full outline-none text-xl bg-transparent mt-3" type="password" placeholder="Enter password" value={password} onChange={updatePassword}/>
                    <button className="font-medium mt-5  py-1 px-32 rounded-full outline-none text-xl bg-emerald-600">Login</button>
                </form>
            </div>
        </div>
    )
}