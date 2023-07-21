import Button from "./Button";
import styles from "./inputBox.module.css";
import axios from "axios";
import { useState } from "react";

function InputBox() {
    
    const [value , setValue] = useState("");

    async function handleClick() {
        try {
            await axios.post("http://localhost:8000/api/todo" , {title : value});
            setValue("");
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