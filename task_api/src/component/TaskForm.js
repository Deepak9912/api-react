import {useState} from 'react';

const TaskForm = (props) => {
    const [value, setValue] = useState('');

    const inputHandler = (event) => {
        setValue(event.target.value);
    };

    const buttonHandler = () => {
        props.onSaveTaskData(value);
        setValue('');
    }

    return <div>
        <div>
            <label>Task</label>
            <input type="text" placeholder="type here" onChange={inputHandler} />
            <button type="submit" onClick={buttonHandler}>Add task</button>
        </div>
    </div>
};

export default TaskForm;