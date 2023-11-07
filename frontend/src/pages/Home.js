import Header from "../components/Header";
import {useNavigate} from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <Header/>
            
            <button
                className='button selected'
                onClick={() => navigate("/tasks")}
            >
                Tasks
            </button>

            <button
                className='button selected'
                onClick={() => navigate("/addTasks")}
            >
                Add Task
            </button>
        </>
    );
}