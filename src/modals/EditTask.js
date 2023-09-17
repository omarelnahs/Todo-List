import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

const EditTask = ({modal, toggle, save, updateTask, taskObj}) => {

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

    React.useEffect(() => {
        setTaskName(taskObj.Name)
        setDesc(taskObj.Desc)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleUpdate = (e)=>{
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Desc'] = desc
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
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
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea 
                            rows="5"
                            className='form-control'
                            value={desc}
                            name ="desc"
                            onChange={handleChange} 
                        ></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>Update</Button>{''}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTask;