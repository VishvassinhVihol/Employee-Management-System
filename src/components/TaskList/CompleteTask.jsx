export default function CompleteTask({task,data,setTaskListData}){
    return (
        <div className="flex-shrink-0 h-full rounded-xl w-[300px] bg-green-400 p-5">
            <div className="flex items-center justify-between ">
                <h3 className="bg-red-500 px-4 py-1 rounded-sm text-sm">{task.category}</h3> 
                <h3>{task.date}</h3>
            </div>

            <p className="mt-5 mb-2 text-2xl font-semibold">{task.title}</p>
            <p className="text-sm">{task.description} </p>

            <div className="mt-4">
                <button className="w-full">Complete</button>
            </div>
        </div>
    )
}