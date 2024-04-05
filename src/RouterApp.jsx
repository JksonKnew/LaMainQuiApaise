import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home/index"


function RouterApp() {
  return (
    <Router>
        {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      {/* <Footer/> */}
    </Router>
  )
}

export default RouterApp;