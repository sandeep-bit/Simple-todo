import styles from './Todoitem.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {AiFillDelete} from 'react-icons/ai';
import { useCtx } from '../context/Todocontext';

function TodoItem({todo}){
    const [isChecked , setIsChecked] = useState(false);
    const {dispatch} = useCtx();
    const {title , completed , _id} = todo;
    

    useEffect(() => {
        setIsChecked(completed);
    },[])

    async function handleDelete() {
        const response = await axios.delete(`http://localhost:8000/api/todo/${_id}`);
        dispatch({type : "DELETE_TODO" , payload : response._id});

    }

    async function handleChange(e) {
       setIsChecked(e.target.checked); 
       await axios.patch(`http://localhost:8000/api/todo/${_id}` , {completed : e.target.checked});
    }

    return <div className={styles.todoItem}>
        <h3>{title}</h3>
        <div>
            <input type="checkbox"  checked={isChecked} onChange={handleChange}/>
            <AiFillDelete className={styles.icon} onClick={handleDelete}/>
        </div>
    </div>
}

export default TodoItem;