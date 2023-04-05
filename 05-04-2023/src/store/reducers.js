export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS_LIST":
      return {
        ...state,
        tasksListData: action.payload,
      };
    case "TEMP_USERNAME":
      return {
        ...state,
        userName: action.payload
      }
    case "TEMP_TODO":
      return {
        ...state,
        todo: action.payload
      }
    case "TASK_COMPLETED":
      return {
        ...state,
        tasksListData: state.tasksListData.map((task) => {
          return task.id === action.payload ? {
            ...task,
            completed: !task.completed,
          } : task;
        })
      };
    case "CREATE_NEW_TASK":
      return {
        ...state,
        tasksListData: [...state.tasksListData, action.payload],
      };
    case "MODAL_TOGGLE":
      return {
        ...state,
        isModalVisibile: !state.isModalVisibile
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        tasksListData: [...state.tasksListData.filter((item, i) => item.id !== action.payload)]
      };
    default:
      return state
  };
}

