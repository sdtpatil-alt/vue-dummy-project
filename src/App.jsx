import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Dummy React App</h1>
        <p>A tiny demo containing a reusable component.</p>
      </header>

      <main>
        <section className="greetings">
          <Greeting name="Alice" />
          <Greeting name="Bob" />
        </section>

        <section className="counter">
          <button onClick={() => setCount((c) => c + 1)}>Increment</button>
          <span className="count-value">Count: {count}</span>
        </section>
      </main>
    </div>
  )
}

export default App
