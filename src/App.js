import './App.css';
import Header  from './components/Navbar/header';
import Footer from './components/Navbar/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import HomeComponent from './components/homeComponent'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './components/contact/contact';
import Ciorbe from './components/meniu/ciorbe';
import Despre from './components/despreNoi/despre';

function App() {
  return (
    
     <Router>
      <div className="App">
      <Header />
       <Routes>
         <Route exact path='/' element={<HomeComponent/>}></Route>   
         <Route exact path='/cosulmeu' element={<Home/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
         <Route path='/despreNoi' element={<Despre/>}></Route>
         <Route path='/ciorbe' element={<Ciorbe/>}></Route>

       </Routes>
    
       <Footer />
      </div>
     </Router>

  );
}

export default App;
