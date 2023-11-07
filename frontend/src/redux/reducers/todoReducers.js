import * as actionTypes from '../actions/type';

export const todoReducers = (state= [], action) => {

    switch(action.type){
        // add the new todo to existing todos in current state
        case actionTypes.ADD_NEW_TODO:
            return [action.payload, ...state]
        case actionTypes.GET_ALL_TODOS:
            return action.payload

        // update the Todo's status in the current state
        case actionTypes.TOGGLE_TODO:
            return state.map(todo => (
                todo._id === action.payload._id ? { ...todo, done: !todo.done} : todo
            ))

        // update the todo from the current state
        case actionTypes.UPDATE_TODO:
            return state.map(todo => (
                todo._id === action.payload._id ? { ...todo, data: action.payload.data} : todo
            ))

        // delete the todo from the current state
        case actionTypes.DELETE_TODO:
            return state.filter(todo => todo._id !== action.payload._id);
        default:
            return state;
    }

};