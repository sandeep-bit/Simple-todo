import styles from './Todoitem.module.css'
function TodoItem({todo}){
    const {title , completed} = todo;
    return <div className={styles.todoItem}>
        <h3>{title}</h3>
        <input type="checkbox" />
    </div>
}

export default TodoItem;