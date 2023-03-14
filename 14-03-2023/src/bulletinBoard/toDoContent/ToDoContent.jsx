import './index.css'

const ToDoContent = ({ data, remove }) => {
    return (
        <div className="ToDoContent_card">
            <h2>{data.toDo}</h2>
            <button onClick={()=>remove(data.id)}>Elimina</button>
        </div>
    )
}

export default ToDoContent
