import { useReducer } from "react";
import { Context } from "./store";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Hero from "./components/hero";
import Modal from './components/modal'
import TasksList from "./components/tasksList";
import styles from "./App.module.scss";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const ToggleModal = () => {
    dispatch({type: "MODAL_TOGGLE"})
  }

  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <Hero />
        <TasksList />
        <Modal />
        <button onClick={ToggleModal} className={styles.addTodo}>{"+"}</button>
      </Context.Provider>
    </div>
  );
}

export default App;
