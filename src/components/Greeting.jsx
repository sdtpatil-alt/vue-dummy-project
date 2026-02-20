import { useState } from 'react'
import '../App.css'

function Greeting({ name }) {
  const [visible, setVisible] = useState(true)

  return (
    <div className="greeting">
      <div className="greeting-row">
        <strong>{name}</strong>
        <button onClick={() => setVisible((v) => !v)} className="small">
          {visible ? 'Hide' : 'Show'}
        </button>
      </div>
      {visible && <p className="greeting-sub">Welcome to the dummy app.</p>}
    </div>
  )
}

export default Greeting
