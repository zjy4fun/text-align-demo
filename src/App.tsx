import React, { useEffect, useState } from 'react'
import './App.css'
import { generateRandomString } from './utils'

function App() {
  const [strArr, setStrArr] = useState<string[]>([])

  useEffect(() => {
    generateRandomStringArr()
  }, [])

  const generateRandomStringArr = (clear?: boolean) => {
    const arr = Array.from({ length: 10 }, () => generateRandomString(5, 100))
    if (clear) {
      setStrArr(arr)
    } else {
      setStrArr([...strArr, ...arr])
    }
  }

  return (
    <div className="flex flex-1 flex-col items-center gap-5">
      <div className="flex gap-5">
        <button className="btn" onClick={() => generateRandomStringArr(false)}>
          Generate
        </button>
        <button className="btn" onClick={() => generateRandomStringArr(true)}>
          Refresh
        </button>
      </div>
      <div className="container flex flex-wrap flex-row-reverse">
        {strArr.map((str, index) => (
          <div key={index} className="text-box flex flex-row flex-wrap">
            {str}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
