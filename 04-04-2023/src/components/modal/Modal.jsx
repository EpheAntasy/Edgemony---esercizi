import styles from "./index.module.scss";
import { Context } from "../../store";
import { useContext, useState } from "react";

const Modal = () => {

    const { state, dispatch } = useContext(Context)
    const [input, setInput] = useState("")

    const newText = (e) => setInput(e.target.value)

    const newToDo = () => {
        dispatch({
            type: 'CREATE_NEW_TASK', payload: {
                "id": state.tasksListData.length+1,
                "todo": input,
                "completed": false,
                "userId": 15
            }
        })
    }

    return state.isModalVisibile && (
        <div type="submit" className={styles.Modal}>
            <div className={styles.form}>
                <label className={styles.label} htmlFor="toDo">Inserisci la nuova to do</label>
                <textarea onChange={newText} value={input} rows={4} cols={50} className={styles.input} type="text" name="toDo" placeholder="Scrivi qui" />
                <button onClick={newToDo} className={styles.btn}>Invia</button>
            </div>
        </div>
    )
}

export default Modal