import { GlobalContext } from '../../store';
import { useContext } from 'react';
import './index.css'

const Counter = () => {

    const { state, dispatch } = useContext(GlobalContext)

    const onHandleClick = (type) => {
        dispatch({ type })
    }

    return (
        <div className="Counter">
            <h1>{state.value}</h1>
            <div className="btn__wrapper">
                <button onClick={() => onHandleClick("increment")} className="btn">+</button>
                <button onClick={() => onHandleClick("decrement")} className="btn">-</button>
                <button onClick={() => onHandleClick("reset")} className="btn">Reset</button>
            </div>
        </div>
    )
}

export default Counter