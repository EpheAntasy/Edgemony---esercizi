import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import { randomHSLA } from "../../utils/funcs";
import { useReducer, useContext } from "react";
import { Context } from '../../store'
import styles from "./index.module.scss";

const Task = ({ taskData }) => {
  const { state, dispatch } = useContext(Context)
  const onHandleToDoDelete = () => {
    dispatch({ type: "REMOVE_TODO", payload: taskData.id })
  }
  const handleConfirmTodo = () => {
    dispatch({ type: "TASK_COMPLETED", payload: taskData.id })
  }
  return (
    <div className={styles.Task} style={{ background: `${randomHSLA()}` }}>
      <div className={styles.info}>
        <img src={`https://robohash.org/${taskData.userId}`} alt={taskData.username} />
        {taskData.completed && <button onClick={onHandleToDoDelete}>✅</button>}
      </div>
      <div className={styles.content}>
        <span>{taskData.username}</span>
        <p onClick={handleConfirmTodo}>{taskData.todo}</p>
      </div>
    </div>
  );
};

export default Task;
