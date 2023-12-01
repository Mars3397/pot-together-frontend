import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from 'Login'
import Overview from './Overview'
import Room from './Room'
import CreatePot from 'CreatePot'
import SearchPot from 'SearchPot'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Overview />} />
        <Route path='/room/:roomId' element={<Room />} />
        <Route path='/CreatePot' element={<CreatePot />} />
        <Route path='/SearchPot' element={<SearchPot />} />
      </Routes>
    </Router>
  )
}

export default App
