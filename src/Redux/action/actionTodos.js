import {ADD_TASK,DELETE_TASK,EDIT_TASK,COMPLETE_TASK,FILTER_TASK} from './actionTypes';

//1 ADD_TASK
export const addTask=(payload)=>{  
    return{
        type:ADD_TASK,
        payload
    }
}

//2 EDIT_TASK
export const editTask=(payload)=>{
    return{
        type:EDIT_TASK,
        payload
    }
}

//3 DELETE_TASK
export const deleteTask=(payload)=>{
    return{
        type:DELETE_TASK,
        payload 
    }
}


//4 COMPLETE_TASK
export const completeTask=(payload)=>{
    return{
        type:COMPLETE_TASK,
        payload
    }
}

//5 FILTER_TASK
export const filterTask=(payload)=>{
    return{
        type:FILTER_TASK,
        payload
    }
}