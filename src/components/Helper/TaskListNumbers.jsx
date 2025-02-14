export default function TaskListNumbers({data}){
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 w-full text-center mt-10 gap-3">
            <div className="   bg-red-400 py-5 px-8 rounded-xl">
                <h2 className="text-3xl font-semibold text-center">{data.taskCount.new}</h2>
                <h2 className="text-xl font-bold text-center">New Task</h2>
            </div>
            <div className="   bg-blue-400 py-5 px-8 rounded-xl">
                <h2 className="text-3xl font-semibold">{data.taskCount.failed}</h2>
                <h2 className="text-xl font-bold">Failed Task</h2>
            </div>
            <div className="  bg-green-400 py-5 px-8 rounded-xl">
                <h2 className="text-3xl font-semibold">{data.taskCount.completed}</h2>
                <h2 className="text-xl font-bold">Completed Task</h2>
            </div>
            <div className=" bg-yellow-400 py-5 px-8 rounded-xl">
                <h2 className="text-3xl font-semibold">{data.taskCount.active}</h2>
                <h2 className="text-xl font-bold">Active Task</h2>
            </div>
        </div>
    )
}