import { todos } from '@/pages/api/todos'

export const getAllIds = () => {
    let ids = [];
    todos.forEach((todo => ids.push(`/eventi/${todo.id}`)))
    return ids
}

export const getTodoFromId = (id) => todos.find((todo) => todo.id.toString() === id)


