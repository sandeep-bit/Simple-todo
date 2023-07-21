import TodoItem from "./TodoItem"
import styles from './TodoList.module.css'

function Todolist() {
    return <div className={styles.list}>
    <TodoItem/>
    <TodoItem/>
    <TodoItem/>
    <TodoItem/>
    </div>
}

export default Todolist