import { initialState } from "./index";

export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_todo':
            return { todoArray: [...state.todoArray, action.payload] }
        case 'remove_todo':
            return { todoArray: [...state.todoArray.filter((item, i) => i !== action.payload.index)] };
        default:
            return state
    }
}