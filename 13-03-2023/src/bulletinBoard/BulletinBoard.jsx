import { useState } from 'react'
// import Calendar from './calendar'
import ToDoContent from './toDoContent'
import toDoList from '../mocks/toDoList'
import Form from './form'
import './index.css'

const BulletinBoard = () => {

    const [toDo, setToDo] = useState(toDoList)


    const addToDo = (e) => {
        e.preventDefault()
        const toDoItem = {
            id: toDoList.length + 1,
            toDo: e.target[0].value,
            when: e.target[1].value,
        }

        let toDoArray = [...toDo]
        toDoArray.push(toDoItem)

        setToDo(toDoArray)
    }

    const removeToDo = (id) => {
        let toDoArray = [...toDo]
        let arrayFiltered = toDoArray.filter(r => r.id != id)
        setToDo(arrayFiltered)
    }

    return (
        <div className="BulletinBoard">
            <div className="BulletinBoard_overlay"></div>
            <Form submit={addToDo} />
            <div className="BulletinBoard_todo">
                <h1>Cose da fare</h1>
                <div className="ToDoContent">
                    {toDo.map((toDo) => <ToDoContent remove={removeToDo} data={toDo} key={toDo.id} />)}
                </div>
            </div>
            {/* < Calendar /> */}
        </div>
    )
}

export default BulletinBoard