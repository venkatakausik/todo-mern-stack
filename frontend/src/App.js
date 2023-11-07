import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddTasks from './pages/AddTasks';
import Tasks from './pages/Tasks';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='/tasks' element={<Tasks/>}></Route>
          <Route path='/addTasks' element={<AddTasks/>}></Route>
          <Route path='*' element={<NoPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
