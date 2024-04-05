import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home/index"
import NavBar from './components/nav';
import AboutPage from './pages/about/about';
import ErrorPage from './pages/error';
import Footer from './components/footer';


function RouterApp() {
  return (
    <Router>
        <NavBar/>
        
        <div className='mainPageContainer'>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/about' element={<AboutPage />}/>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>

      <Footer/>
    </Router>
  )
}

export default RouterApp;