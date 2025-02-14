export default function Header({data,changeUser}){
    
    function loggedOutUser(){
        localStorage.setItem('loggedUser','')
        // window.location.reload()//to reload window.now ahi aapde localstorage ma jaine loggedUser ne khali kari daie chhie and jevo aa window vado method call thase to page reload thase and App ma useEffect call thase but tya loggedUser null hase to user pan null hase to have login form khulse
        changeUser('')//changeUser is a state updator from app
    }

    return (
        <div className="flex justify-between items-end ">
            <h1 className="font-semibold text-2xl">Hello <br /> <span className="font-black text-3xl">{data.name} 👋</span></h1>
            <button onClick={loggedOutUser} className="bg-red-600 px-6 py-2 rounded-sm text-lg font-xl">Log Out</button>
        </div> 
    )
}