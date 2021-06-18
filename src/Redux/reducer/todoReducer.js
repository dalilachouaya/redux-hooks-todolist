import { ADD_TASK, DELETE_TASK, EDIT_TASK, COMPLETE_TASK , FILTER_TASK} from '../action/actionTypes';

const initialState = {
    listItem: [
                ],

    filterItem:"all",
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, listItem: state.listItem.concat(action.payload) };
           // return { ...state, listItem: [...state.listItem, action.payload] };
        case EDIT_TASK:
            return {...state,listItem:state.listItem.map(item=>(item.id === action.payload.id)? {...item,description:action.payload.description}:item)  }
        case DELETE_TASK:
            return { ...state, listItem: state.listItem.filter(item => item.id !== action.payload) }
        case COMPLETE_TASK:
            return { ...state, listItem: state.listItem.map(item => item.id === action.payload ? { ...item, isDone: !item.isDone } : item) }
        
            case FILTER_TASK:
            return{...state,filterItem:action.payload}
        default:
            return state
    }
}

export default todoReducer;


/*
 {id:"0",
        description:" Footing",
        isDone:false}
        */