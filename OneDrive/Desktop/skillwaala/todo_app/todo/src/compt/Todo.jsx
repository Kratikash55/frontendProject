import React, { useEffect, useState } from 'react'
import todocss from "./Todo.module.css"
import { toast } from "react-hot-toast"

const Todo = () => {
    const taskData = JSON.parse(localStorage.getItem("todo")) || [{task : "Buy car" ,complete : false},
        {task: "Buy Bike",complete : true},
        {task : "Buy Phone",complete : false}
    ];

    const [allData ,setAllData ] = useState(taskData);

    const [todoTask , setTodoTask ] = useState("");

    const [search ,setSearch] = useState("");

    const [Ctask , setCtask ] = useState(0);
    const [Rtask , setRtask ] = useState(0);

    function handleform(e){
        e.preventDefault();
        console.log({ task : todoTask});
        const myTask = todoTask.trim();
        if(!myTask){
            toast.error("Please Add Task")
        }else
        { const isVerified = allData.some((value , index)=>{
            return value.task.toLowerCase() === todoTask.toLowerCase(); 
        })

        if(isVerified){
            toast.error("Task Already Added ");
             setTodoTask("");
        }
       
        else{
            setAllData([...allData ,{task : todoTask ,complete : false}]);
        setTodoTask("");
        toast.success("Successfully Added ✔️"); }
    }   }

    function handleDelete(id){
        const copyOfAllData =[...allData];
        const filterData = copyOfAllData.filter((value , index)=>{
            return index !== id;
        })
        setAllData(filterData);
    }

    function handleCheckbox(id){
        const copyOfAllData = [...allData];
        copyOfAllData[id].complete =! copyOfAllData[id].complete;
        setAllData(copyOfAllData);}

       

    function handleClear(){
        let copyOfAllData = [...allData];
        copyOfAllData = [];
        setAllData(copyOfAllData);
    }

    function handleEdit(id){
        const copyOfAllData = [...allData];
        const oldTask = copyOfAllData[id].task;
        const newTask = prompt(`update task :-${oldTask}`,oldTask);
        const newObj = { task : newTask , complete : false};
         copyOfAllData.splice(id ,1 ,newObj);
         setAllData(copyOfAllData);
    }

    const filterTask = allData.filter((items)=>{
        return items.task.toLocaleLowerCase().includes(search.toLowerCase());
    });

    useEffect(()=>{
          const copyOfAllData = [...allData];
         const allCompleteTask =copyOfAllData.filter((value)=>{
            return value.complete ;
        });
        setCtask(allCompleteTask.length);

        const allRemainingTask =copyOfAllData.filter((value)=>{
            return !value.complete ;
        });
        setRtask(allRemainingTask.length);

        localStorage.setItem("todo" ,JSON.stringify(copyOfAllData));
    
    },[allData]);

    return (
        <div className={todocss.main}>
            <div >
                <h1 className={todocss.heading}>ToDo-Application 📃</h1>
           
           </div>
         <div className={todocss.task}>
            <form action="" onSubmit={handleform}>
                <input type="text" name="" id="" placeholder='Add Task Here...' className='form-control' value={todoTask} onChange={(e)=>{setTodoTask(e.target.value)}} />
                <input type="search" name="" id="" placeholder='Search Task Here..🔍' className='form-control mt-2' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                <button type='submit' className='form-control btn btn-success mt-2'> Add </button>
            </form>
            
            { filterTask.length === 0 ? <h3 className='text-center text-danger'>No Matching Result..❌</h3> :
                filterTask.map((items ,index)=>(
                    <div key={index} className={todocss.alltask}>
                        <input type="checkbox" name="" id=""  className={todocss.checkbox} checked={items.complete} onClick={()=>{handleCheckbox(index)}}/> 
                        <span style={{textDecoration : items.complete ? "line-through red" : ""}}>{items.task}</span>
                        <i className="bi bi-x-square text-danger float-end" onClick={()=>{handleDelete(index)}}></i>
                        <i className="bi bi-pencil-square text-success float-end me-2 " onClick={()=>{handleEdit(index)}}></i>
                    </div>
                ))
            }

            <button className='btn btn-outline-danger form-control mt-4 font-bold' onClick={handleClear}>All Clear🫧🫧</button>
            </div>

            <span className='fw-bold' >Complete Task :- {Ctask}</span>
            <span className='fw-bold'>Remaining Task :- {Rtask}</span>
    </div>
   
    )
}

export default Todo
