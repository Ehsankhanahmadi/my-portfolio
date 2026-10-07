import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">
        My Portfolio
      </h1>
    </div>
  )
}

export default App
