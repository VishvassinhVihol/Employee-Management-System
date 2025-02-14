export default function AcitveTask({task,data,setTaskListData}){
    function markCompleted(){
       task.active = false,
       task.completed = true
        setTaskListData(prevData => ({
            ...prevData,
            tasks: prevData.tasks.map(t => t.id === task.id ? { ...t } : t)
        }));
        
        // console.log(data);
        
    }
    function markFailed(){
        task.active = false,
        task.failed = true
         
        
        setTaskListData(prevData => ({
            ...prevData,
            tasks: prevData.tasks.map(t => t.id === task.id ? { ...t } : t)
        }));
        
        // console.log(data);
        
    }
    return (
        <div className="flex-shrink-0 h-full rounded-xl w-[300px] bg-yellow-400 p-5">
            <div className="flex items-center justify-between ">
                <h3 className="bg-red-500 px-4 py-1 rounded-sm text-sm">{task.category}</h3> 
                <h3>{task.date}</h3>
            </div>

            <p className="mt-5 mb-2 text-2xl font-semibold">{task.title}</p>
            <p className="text-sm">{task.description} </p>

            <div className="mt-4">
                <button onClick={markCompleted} className="bg-green-400 p-1 rounded mr-2">Mark as Competed</button>
                <button onClick={markFailed} className="bg-red-400 p-1 rounded">Mark as Failed</button>
            </div>
        </div>
    )
}