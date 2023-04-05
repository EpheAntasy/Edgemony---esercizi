import { useEffect, useContext } from "react";
import { Context } from "../../store";
import Task from "../task/Task";
import taskData from '../../mock/taskData.json'
import styles from "./index.module.scss";

const TasksList = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({ type: "SET_TASKS_LIST", payload: taskData });
  }, [])

  return (
    <div className={styles.TasksList}>
      {state.tasksListData.map((task) => (
        <Task taskData={task} key={task.id} />
      ))}
    </div>
  )
}

export default TasksList;
