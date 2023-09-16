import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

const CreateTask = ({modal, toggle, save}) => {

    const [taskName, setTaskName] = React.useState('')
    const [desc, setDesc] = React.useState('')

    function handleChange(e){
        const {name, value} = e.target
        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDesc(value)
        }
    }

    const handleSave = ()=>{
        let taskObj ={}
        taskObj["Name"] = taskName
        taskObj["Desc"] = desc
        save(taskObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className='from-group'>
                        <label>Task Name</label>
                        <input 
                            type="text"
                            className= "form-control"
                            value={taskName}
                            name ="taskName"
                            onChange={handleChange} 
                        />
                    </div>
                    <div className='from-group'>
                        <label>Description</label>
                        <textarea 
                            rows="5"
                            className='form-control'
                            value={desc}
                            name ="desc"
                            onChange={handleChange} 
                        >
                        </textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Create</Button>{''}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTask;