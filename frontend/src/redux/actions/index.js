import axios from 'axios';
import { ADD_NEW_TODO, GET_ALL_TODOS, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from './type';
// Backend API URL
const API_URL = "http://localhost:8000"; 

export const addNewTodo = (data) => async (dispatch) => {

    try {
        const res = await axios.post(`${API_URL}/tasks`, {data});
        dispatch({
            type: ADD_NEW_TODO,
            payload: res.data
        });
    } catch(error){
        console.log('Error while calling addNewTodo API ', error.message);
    }
}

export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/tasks`);
        dispatch({
            type: GET_ALL_TODOS,
            payload: res.data
        });
    } catch(error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/tasks/${id}`);
        dispatch({
            type: TOGGLE_TODO,
            payload: res.data
        });
    } catch(error) {
        console.log('Error while calling toggleTodo API ', error.message);
    }
}

export const updateTodo = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/tasks/${id}`, {data});
        dispatch({
            type: UPDATE_TODO,
            payload: res.data
        });
    } catch(error) {
        console.log('Error while calling updateTodo API ', error.message);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/tasks/${id}`);
        dispatch({
            type: DELETE_TODO,
            payload: res.data
        });
    } catch(error) {
        console.log('Error while calling deleteTodo API ', error.message);
    }
}

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({type: TOGGLE_TAB, selected: tab})
}