import { createContext, useReducer , useContext} from "react";

const TodoContext = createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case "SET_TODOS" : 
            return action.payload;
        case "ADD_TODO":
            return [...state, action.payload];
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload);
        case "UPDATE_TODO":
            return state.map((todo) => todo.id === action.payload.id ? action.payload : todo);
        default:
            return state;
    }
}

function TodoProvider({children}) {
    const [todos , dispatch] = useReducer(reducer , [])
    return <TodoContext.Provider value={{todos , dispatch}}>
        {children}
    </TodoContext.Provider>
}

function useCtx() {
    return useContext(TodoContext);
}

export {TodoProvider, useCtx};