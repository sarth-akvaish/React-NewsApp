import './App.css';
import Navbar from './components/Navbar.js'
import News from './components/News';
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// Function based component 
// render is a life cycle method - to render htm on screen

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={2}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={ setProgress} key="general" country="in" pageSize={8} category="general" />}></Route>
          <Route exact path="/business" element={<News setProgress={ setProgress} key="business" country="in" pageSize={8} category="business" />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={ setProgress} key="entertainment" country="in" pageSize={8} category="entertainment" />}></Route>
          <Route exact path="/health" element={<News setProgress={ setProgress} key="health" country="in" pageSize={8} category="health" />}></Route>
          <Route exact path="/science" element={<News setProgress={ setProgress} key="science" country="in" pageSize={8} category="science" />}></Route>
          <Route exact path="/sports" element={<News setProgress={ setProgress} key="sports" country="in" pageSize={8} category="sports" />}></Route>
          <Route exact path="/technology" element={<News setProgress={ setProgress} key="technology" country="in" pageSize={8} category="technology" />}></Route>
        </Routes>
      </Router>
    </div>
  )

}

export default App