import { useEffect } from "react";
import { getAllTodos } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import Tabs from "./Tabs";
import { ALL_TODOS, ACTIVE_TODOS, DONE_TODOS } from "../redux/actions/type";
const Todos = () => {


    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab);
    useEffect(() => {
        dispatch(getAllTodos());
    }, [])

    const getTodos = () => {
        if(currentTab === ALL_TODOS) {
            return todos;
        } else if (currentTab === ACTIVE_TODOS) {
            return todos.filter(todo => !todo.done)
        } else if (currentTab === DONE_TODOS) {
            return todos.filter(todo => todo.done)
        }
    }

    return (
        <article>
            <div>
                <Tabs currentTab={currentTab}/>
            </div>
            <ul>
                {
                    getTodos().map(todo => (
                        <Todo 
                            key={todo._id}
                            todo={todo}
                        />
                    ))
                }
            </ul>
        </article>
    )
}

export default Todos;