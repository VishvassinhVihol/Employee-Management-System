import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function CreateTask({data}){
    
    let [taskTitle,setTaskTitle] = useState('')
    let [taskDate,setTaskDate] = useState('')
    let [taskAssignTo,setTaskAssignTo] = useState('')
    let [taskCategory,setTaskCategory] = useState('')
    let [taskDescription,setTaskDescription] = useState('')


   
    let [userData,setUserData] = useContext(AuthContext)

    function submitHandler(e){
        e.preventDefault();
        
        let task = {title:taskTitle,date:taskDate,category:taskCategory,description:taskDescription,active:true,newTask:true,completed:false,failed:false}
     
        // console.log(newTask);
        
        
        let x = userData
        x.employees.forEach((employee) => {
            if(employee.name == taskAssignTo){
                
                employee.tasks.push(task)
                employee.taskCount.new = employee.taskCount.new + 1
                
            }
        })

        setUserData(x)
    
        setTaskTitle('')
        setTaskDate('')
        setTaskCategory('')
        setTaskAssignTo('')
        setTaskDescription('')
        
        
    }
    return(
        <div className="p-5 mt-5 bg-[#1C1C1C]">
                <form onSubmit={submitHandler} className="flex sm:flex-row flex-col sm:justify-between items-center  mt-10">
                    <div className="sm:w-1/2  ">
                        <div className="mt-1">
                            <h3 className="text-sm">Task Title</h3>
                            <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} type="text" className="border-[1px] placeholder:text-center outline-none text-sm mb-4 rounded py-1 sm:px-5 px-15" name="title" placeholder="make a UI design"/>
                        </div>
                        <div className="mt-1">
                            <h2 className="text-sm">Date</h2>
                            <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)} className="border-[1px] placeholder:text-center outline-none text-sm mb-4 rounded py-1 sm:px-10 px-20" type="date" name="date" id="" />
                        </div >
                        <div className="mt-1">
                            <h3 className="text-sm">Assign To</h3>
                            <input value={taskAssignTo} onChange={(e) => setTaskAssignTo(e.target.value)} className="border-[1px] placeholder:text-center outline-none text-sm mb-4 rounded py-1 sm:px-5 px-15" type="text" name="assignTo" placeholder="Employee name" />
                        </div >
                        <div className="mt-1">
                            <h3 className="text-sm">Category</h3>
                            <input value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)} className="border-[1px] placeholder:text-center outline-none text-sm mb-4 rounded py-1 sm:px-5 px-15" type="text" name="assignTo" placeholder="design,dev etc" />
                        </div>
                    </div>


                    <div className="sm:w-1/2 w-full flex flex-col justify-start">
                        <h2 className="text-sm">Description</h2>
                        <textarea  value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} className="border-[1px] w-full h-44 outline-none p-2 rounded" name="Description" id=""></textarea>
                        <button className="mt-1 bg-emerald-500 rounded py-2 hover:bg-emerald-700">Create Task</button>
                    </div>
                   
                    
                </form>
            </div>
    )
}