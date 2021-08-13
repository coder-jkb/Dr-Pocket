import React from 'react'
import '../styles/styles.css'

function App() {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-gray-700 text-5xl font-semibold">
          <span className="bg-clip-text text-transparent bg-gradient-to-l to-blue-600 from-gray-700">
            Prachet
          </span>
          {' + '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-teal-400">
            Ojas
          </span>
          {' + '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-teal-400">
            Jay
          </span>
        </h1>
        <span className="text-lg text-gray-600">
          Dr Pocket
        </span>
      </div>
    </div>
  )
}

export default App
