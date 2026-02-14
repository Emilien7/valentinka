import { useState } from 'react'
import './App.css'
import {STEPS} from "./steps.tsx";

function App() {
  const [step, setStep] = useState(0)

  return <div style={{display: 'flex', flexDirection: 'column', width: '800px', margin: 'auto', gap: '30px'}}>
    {STEPS[step]}
    {step < 7 && <button onClick={() => setStep(prev => prev + 1)}>Дальше</button>}
  </div>
}

export default App
