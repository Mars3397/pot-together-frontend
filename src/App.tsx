import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import routes, { RouteConfig } from 'authentication/routes';

// This is for testing only.
const isAuthenticated = true;

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route: RouteConfig, index: number) => (
          !isAuthenticated && route.isPrivate ?
            <Route key={index} path="*" element={<Navigate to="/login" />} /> :
            <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App
