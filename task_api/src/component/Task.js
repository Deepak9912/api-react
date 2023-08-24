const Task = (props) => {

    const removeHandler = () => {
        props.onDeleteItem(props.index)
    }

    return <div>
        {props.task}<div onClick={removeHandler}>Delete</div>
        
    </div>
}

export default Task;