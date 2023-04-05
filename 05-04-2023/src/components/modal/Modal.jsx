import styles from "./index.module.scss";
import { Context } from "../../store";
import { useContext, useState } from "react";

const Modal = () => {

    const { state, dispatch } = useContext(Context)
    const { userName, tasksListData, todo } = state

    const todoUserInput = (e) => {
        dispatch({ type: "TEMP_USERNAME", payload: e.target.value })
    }
    const todoTextInput = (e) => dispatch({ type: "TEMP_TODO", payload: e.target.value })
    const newToDo = (e) => {
        e.preventDefault()
        dispatch({
            type: 'CREATE_NEW_TASK', payload: {
                "id": Math.floor(Math.random(2) * 99) + 30,
                "username": userName,
                "todo": todo,
                "completed": false,
                "userId": Math.floor(Math.random(2) * 99)
            }
        })
        dispatch({ type: "TEMP_USERNAME", payload: "" })
        dispatch({ type: "TEMP_TODO", payload: "" })
        alert(`Nuova todo inserita con successo`)
        dispatch({ type: 'MODAL_TOGGLE' })
    }

    return state.isModalVisibile && (
        <div className={styles.Modal}>
            <form onSubmit={newToDo} type="submit" className={styles.form}>
                <input required value={userName} onChange={todoUserInput} type="text" name="username" className={styles.input} placeholder="Username" />
                <textarea required value={todo} onChange={todoTextInput} rows={4} cols={50} className={styles.input} type="text" name="todo" placeholder="Nuova To Do" />
                <button className={styles.btn}>Invia</button>
            </form>
        </div>
    )
}

export default Modal