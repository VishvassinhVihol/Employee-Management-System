import { useContext, useDebugValue } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function NewTask({task,data,setTaskListData}){
   

    function changeTask(){
        task.newTask = false,
        task.active = true
        // console.log(task);
        
        console.log(data.tasks[task.id]);
        
        setTaskListData(prevData => ({
            ...prevData,
            tasks: prevData.tasks.map(t => t.id === task.id ? { ...t, newTask: false, active: true } : t)
        }));
        
        // console.log(data);
        
    }
    
 
    
    return (
        <div className="flex-shrink-0 h-full rounded-xl w-[300px] bg-red-400 p-5">
            <div className="flex items-center justify-between ">
                <h3 className="bg-red-500 px-4 py-1 rounded-sm text-sm">{task.category}</h3> 
                <h3>{task.date}</h3>
            </div>

            <p className="mt-5 mb-2 text-2xl font-semibold">{task.title}</p>
            <p className="text-sm">{task.description} </p>

            <div className="mt-4">
                <button onClick={changeTask} className="bg-emerald-400 p-1.5 rounded">Accept Task</button>
            </div>
        </div>
    )
}