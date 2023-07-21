import styles from './Todoitem.module.css'
function TodoItem(){
    return <div className={styles.todoItem}>
        <h3>Buy clothes</h3>
        <input type="checkbox" />
    </div>
}

export default TodoItem;