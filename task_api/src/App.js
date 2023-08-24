import { useState } from 'react';
import './App.css';
import TaskForm from './component/TaskForm.js';
import Task from './component/Task.js';


function App() {
  const [taskInput, setTaskInput] = useState([]);

  const saveTaskDataHandler = (enteredTaskData) => {
    setTaskInput([...taskInput, enteredTaskData])
  };

  const removeDataHandler = (key) => {
    let newTask = [...taskInput];
    newTask.splice(key, 1);
    setTaskInput([...newTask])
  };

  return (
    <div>
      <TaskForm onSaveTaskData={saveTaskDataHandler}/>
      {taskInput.map((taskItem, i) => {
        return (
          <Task task={taskItem} index={i} key={i} onDeleteItem={removeDataHandler} />
        )
      })}
    </div>
  );
}

export default App;
