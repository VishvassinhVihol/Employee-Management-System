import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function AllTask({ data }) {
    const [userData, setUserData] = useContext(AuthContext);

    return (
        <div id="taskList" className="bg-[#1C1C1C] p-4 pb-0 m-3 mt-5 overflow-auto flex flex-col">
            
            {/* Header Row (Hidden on small screens) */}
            <div className="hidden md:flex bg-red-400 m-2 w-full p-2 rounded justify-between text-center">
                <h2 className="w-1/5 font-medium text-lg">Name</h2>
                <h2 className="w-1/5 font-medium text-lg">New</h2>
                <h2 className="w-1/5 font-medium text-lg">Active</h2>
                <h2 className="w-1/5 font-medium text-lg">Completed</h2>
                <h2 className="w-1/5 font-medium text-lg">Failed</h2>
            </div>

       
            {userData.employees.map((employee, idx) => (
                <div key={idx} className="border-2 border-emerald-400 m-2 p-2 w-full rounded">
                    
                    <div className="md:hidden grid grid-cols-2 gap-2">
                        <h2 className="font-medium text-md">Name:</h2>
                        <h2 className="text-sm">{employee.name}</h2>

                        <h2 className="font-medium text-md">New:</h2>
                        <h2 className="text-sm">{employee.taskCount.new}</h2>

                        <h2 className="font-medium text-md">Active:</h2>
                        <h2 className="text-sm">{employee.taskCount.active}</h2>

                        <h2 className="font-medium text-md">Completed:</h2>
                        <h2 className="text-sm">{employee.taskCount.completed}</h2>

                        <h2 className="font-medium text-md">Failed:</h2>
                        <h2 className="text-sm">{employee.taskCount.failed}</h2>
                    </div>

                   
                    <div className="hidden md:flex justify-between text-center overflow-hidden">
                        <h2 className="w-1/5 font-medium text-lg">{employee.name}</h2>
                        <h2 className="w-1/5 font-medium text-lg">{employee.taskCount.new}</h2>
                        <h2 className="w-1/5 font-medium text-lg">{employee.taskCount.active}</h2>
                        <h2 className="w-1/5 font-medium text-lg">{employee.taskCount.completed}</h2>
                        <h2 className="w-1/5 font-medium text-lg">{employee.taskCount.failed}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
}
