import "./App.css";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import { Route, Routes} from 'react-router-dom'
import TestimonialPage from "./pages/TestimonialPage";
import AboutPage from "./pages/AboutPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/testimonial' element={<TestimonialPage />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
