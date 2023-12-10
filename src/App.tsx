import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from 'components/Welcome'
import SignUp from 'components/SignUp'
import Login from 'components/Login'
import Overview from 'components/Overview'
import Room from 'components/Room'
import CreatePot from 'components/CreatePot'
import SearchPot from 'components/SearchPot'
import Cooking from 'components/Cooking'
import Choose from 'components/Choose'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Overview />} />
        <Route path='/room/:roomId' element={<Room />} />
        <Route path='/room/:roomId/Cooking' element={<Cooking />} />
        <Route path='/CreatePot' element={<CreatePot />} />
        <Route path='/SearchPot' element={<SearchPot />} />
        <Route path='/room/:roomId/Choose' element={<Choose />} />
      </Routes>
    </Router>
  )
}

export default App
