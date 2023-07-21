import Button from "./Button";
import styles from "./inputBox.module.css";
import axios from "axios";
import { useState } from "react";
import { useCtx } from "../context/Todocontext";

function InputBox() {
    const [value , setValue] = useState("");
    const {dispatch} = useCtx();

    async function handleClick() {
        try {
            const response = await axios.post("http://localhost:8000/api/todo" , {title : value});
            dispatch({type : "ADD_TODO" , payload : response.data});

        } catch (error) {
            console.log(error);
        }
    }

    return <div className={styles.inputbox}>
        <input type="text" onChange={(e) => setValue(e.target.value)}/>
        <Button onClick={handleClick}>Add to list</Button>
    </div>
}

export default InputBox