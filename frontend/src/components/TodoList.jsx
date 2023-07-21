import { useEffect , useState } from "react";
import TodoItem from "./TodoItem"
import styles from './TodoList.module.css'
import axios from 'axios';
import { useCtx } from "../context/Todocontext";



function Todolist() {
    const {todos , dispatch} = useCtx();

    console.log(todos)
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("http://localhost:8000/api/todo");
            dispatch({type : "SET_TODOS" , payload : response.data});
            
        }
        fetchData().catch(err => console.log(err))
    },[])
    return <div className={styles.list}>
        {todos.map(todo => <TodoItem key={todo._id} todo={todo}/>)}
    </div>
}

export default Todolist