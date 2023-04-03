export const counterReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state.value, value: state.value + 1 };
        case "decrement":
            return {...state.value, value: state.value - 1 };
        case "reset":
            return { value: 0 };
        default: return state;
    }
}

