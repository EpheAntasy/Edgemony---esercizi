import { useContext, useState } from 'react'
import './index.css'
import { GlobalContext } from '../../stores'

const ToDo = () => {
    const { state, dispatch } = useContext(GlobalContext)
    const [value, setValue] = useState("");


    const addTodo = (e) => {
        e.preventDefault();
        if (e.target[0].value) {
            dispatch({ type: 'add_todo', payload: { name: e.target[0].value } })
            setValue("")
        } else {
            alert("Non hai scritto nulla!!")
        }

    }
    const removeTodo = (index) => {
        dispatch({ type: 'remove_todo', payload: { index } })
    }
    const setValueInput = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className="ToDo">
            <h2 className='ToDo_title'>ToDo</h2>
            <div className='todoContainer'>
                {state?.todoArray?.length ? state?.todoArray?.map((item, index) => <div key={index} className='todoWrapper'>
                    <span>{item.name}</span>
                    <button onClick={() => removeTodo(index)}>X</button>
                </div>) : <p>Aggiungi un elemento alla lista</p>}
            </div>
            <form onSubmit={addTodo}>
                <input type="text" placeholder='Inserisci todo' value={value} onChange={setValueInput} />
            </form>
        </div>
    )
}

export default ToDo