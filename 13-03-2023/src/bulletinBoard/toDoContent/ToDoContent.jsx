import './index.css'
import { FcOk, FcHighPriority } from "react-icons/fc";

const ToDoContent = ({ data, remove }) => {
    return (
        <div className="ToDoContent_card">
            <h2>{data.toDo}</h2>
            <h3>Data: {data.when}</h3>
            <button onClick={(()=>remove(data.id))}>Elimina appuntamento</button>
        </div>
    )
}

export default ToDoContent
