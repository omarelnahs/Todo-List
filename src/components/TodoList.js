import React from 'react';
import CreateTask from  "../modals/CreateTask";

const TodoList = () => {
    const [modal, setModal] = React.useState(false);
    const [taskList, setTaskList] = React.useState([])

    const toggle = () =>{
        setModal(!modal);
    }

    const saveTask = (taskObj)=>{
        let tempList = taskList
        tempList.push(taskObj)
        setTaskList(tempList)
        setModal(false)
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
                {taskList.map((obj) => <li>{obj.Name}</li>)}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
            
        </>
    );
};

export default TodoList;