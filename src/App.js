import './App.css';
import Header  from './components/Navbar/header';
import Footer from './components/Navbar/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import HomeComponent from './components/homeComponent'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GalleryHomePage from './components/gallery';

function App() {
  return (
    
     <Router>
      <div className="App">
      <Header />
       <Routes>
         <Route exact path='/' element={<HomeComponent/>}></Route>
         <Route exact path='/mycart' element={<Home/>}></Route>
       </Routes>
       <Home />
        <GalleryHomePage/> 
       <Footer />
      </div>
     </Router>

  );
}

export default App;
