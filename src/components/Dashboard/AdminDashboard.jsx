import AllTask from "../Helper/AllTask";
import CreateTask from "../Helper/CreateTask";
import Header from "../Helper/Header";

export default function AdminDashboard({data,changeUser}){
    return (
        <div className="p-10    h-screen w-full">
            <Header data={data} changeUser={changeUser}/>
            <CreateTask data={data} />
            <AllTask data={data}  />
        </div>
    )
}