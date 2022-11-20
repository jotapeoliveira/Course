import './App.css'
import Title from "./components/Title"
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <header>
        <Title />
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  )
}

export default App
