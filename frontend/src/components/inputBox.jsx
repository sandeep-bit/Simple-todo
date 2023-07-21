import Button from "./Button";
import styles from "./inputBox.module.css";

function InputBox() {
    return <div className={styles.inputbox}>
        <input type="text" />
        <Button>Add to list</Button>
    </div>
}

export default InputBox