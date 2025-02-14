import { useEffect, useState } from "react";
import AcitveTask from "./ActiveTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

export default function TaskList({data}){
   
    
     
    const [taskListData,setTaskListData] = useState(null)
    useEffect(() => {
        setTaskListData(data)
    },[])
    
    return (
        <div id="taskList" className="  scroll-container w-full flex items-center sm:justify-start gap-5 sm:flex-nowrap flex-wrap justify-center p-10 overflow-x-auto  mt-10 sm:h-[58%]">
            
            {data.tasks.map((task,idx) => {
                let t = task;
                t.id = idx
                if(task.active){
                    
                    return (<AcitveTask key={idx} task={t} data={data} setTaskListData={setTaskListData} />)
                }
                if(task.completed){
                    return (<CompleteTask key={idx} task={t} data={data} setTaskListData={setTaskListData}/>)
                }
                if(task.failed){
                    return (<FailedTask key={idx} task={t} data={data} setTaskListData={setTaskListData}/>)
                }
                if(task.newTask){
                    return (<NewTask key={idx} task={t} data={data} setTaskListData={setTaskListData}/>)
                }
            })}
            
            
        </div>
    )
}