import Header from "../Helper/Header"
import TaskListNumbers from "../Helper/TaskListNumbers"
import TaskList from "../TaskList/TaskList"

export default function EmployeeDashboard({data,changeUser}){
    
    
    return (
        <div className="p-10 bg-[#1C1C1C]  h-screen w-screen">
            <Header data={data} changeUser={changeUser}/>
            <TaskListNumbers data={data}/>
            <TaskList data={data}/>
        </div>
    )
}