import './App.css'
import Counter from './components/counter'
import { GlobalContext, counter } from './store'
import { counterReducer } from './store/reducers'
import { useReducer } from 'react'


function App() {

  const [state, dispatch] = useReducer(counterReducer, counter)

  return (
    <div className="App">
      <GlobalContext.Provider value={{state, dispatch}}>
        <Counter />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
