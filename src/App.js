import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
import ValidatedLoginForm from './ValidatedLoginForm';
import Forgot from './components/forgot'
import Form from './utilities/forms'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/validate" element={<ValidatedLoginForm />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="/forms" element={<Form />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App