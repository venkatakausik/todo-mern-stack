import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";
import {useNavigate} from 'react-router-dom';
const TodoForm = () => {
    // text to store input
    const [text, setText] = useState(''); 
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFormSubmit= (e) => {
        e.preventDefault();
        setError(validateValues(text));
        // add the new todo only if passes the validation
        if(error.length === 0){
            dispatch(addNewTodo(text));
            // reset the text to empty after adding the new todo task
            setText('');
            navigate("/tasks");
        }
        
    }

    // validate if the input todo name is null / empty
    const validateValues = (inputValue) => {
        let error = "";
        if (inputValue === null || inputValue.length === 0 ) {
          error = "Task name cannot be empty";
        }
        return error;
      };

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input 
            placeholder="Enter new task"
            className="input"
            name="task"
            onChange={onInputChange}
            value={text}
            />
            {/* Display error message if new input task name is empty */}
            {error ? (
                <p className="error">
                    {error}
                </p>
                ) : null}
        </form>
    );
}

export default TodoForm;