import React, { useEffect } from 'react';
import CreateTask from  "../modals/CreateTask";
import Card from './Card';

const TodoList = () => {
    const [modal, setModal] = React.useState(false);
    const [taskList, setTaskList] = React.useState([])

    useEffect(() => {
        let arr = localStorage.getItem("taskList")

        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }else{
            setTaskList("add One")
        }
    }, [])

    const toggle = () =>{
        setModal(!modal);
    }

    const deleteTask = (index) =>{
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) =>{
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const saveTask = (taskObj)=>{
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setModal(false)
        setTaskList(tempList)
        
    }

    return (
        <>
            <div className='header text-center'>
                <h3>Todo List</h3>
                <button 
                    className='btn btn-primary mt-2'
                    onClick={toggle}
                >
                    Create Task
                </button>
            </div>
            <div className='task-container'>
                {taskList.map((obj, index) => 
                <Card taskObj={obj}
                    index={index}
                    deleteTask={deleteTask}
                    updateListArray={updateListArray} 
                    key={index}
                />)}

            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
            
        </>
    );
};

export default TodoList;