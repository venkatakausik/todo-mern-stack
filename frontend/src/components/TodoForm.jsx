import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
    const [text, setText] = useState(''); 
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const onFormSubmit= (e) => {
        e.preventDefault();
        setError(validateValues(text));
        if(error.length === 0){
            dispatch(addNewTodo(text));
            setText('');
        }
        
    }

    const validateValues = (inputValue) => {
        let error = "";
        if (inputValue === null || inputValue.length === 0 ) {
          error = "Email is too short";
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
            {error ? (
                <p className="error">
                    Task name cannot be empty
                </p>
                ) : null}
        </form>
    );
}

export default TodoForm;