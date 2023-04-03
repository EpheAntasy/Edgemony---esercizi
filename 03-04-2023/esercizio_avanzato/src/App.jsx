import './App.css'
import { GlobalContext, initialState } from './stores'
import ToDo from './components/toDo'
import { useReducer } from 'react'
import { toDoReducer } from './stores/reducers'

function App() {
  const [state, dispatch] = useReducer(toDoReducer, initialState)

  return (
    <div className="App">
      <GlobalContext.Provider value={{ state, dispatch }}>
        <ToDo />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
