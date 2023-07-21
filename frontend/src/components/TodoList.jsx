import { useEffect , useState } from "react";
import TodoItem from "./TodoItem"
import styles from './TodoList.module.css'
import axios from 'axios';


function Todolist() {
    const [todos , setTodos] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("http://localhost:8000/api/todo");
            console.log(response.data)
            setTodos(response.data);
        }
        fetchData().catch(err => console.log(err))
    },[])
    return <div className={styles.list}>
        {todos.map(todo => <TodoItem key={todo._id} todo={todo}/>)}
    </div>
}

export default Todolist