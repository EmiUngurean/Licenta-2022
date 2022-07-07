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
import PreparatePuiApp from './components/meniu/preparatePuiApp';
import PreparatePorc from './components/meniu/preparatePorc';
import PreparateVita from './components/meniu/preparateVita';
import PreparatePeste from './components/meniu/preparatePeste';
import Garnituri from './components/meniu/garnituri';
import Salate from './components/meniu/salate';
import ProduseExtra from './components/meniu/produseExtra';
import Desert from './components/meniu/desert';
import AltePreparate from './components/meniu/altePreparate';
import Bauturi from './components/meniu/bauturi';
import FeluriPrincipale from './components/feluriPrincipale';
import { useState } from 'react';
import CosulMeu from './components/cosulMeu/cosulMeu';
import Login from './components/userLoginRegister/login';
import Register from './components/userLoginRegister/register';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (CardProduse) => {
    const exist = cartItems.find(x => x.title === CardProduse.title);
    if(exist){
      setCartItems(cartItems.map(x => x.title === CardProduse.title ? {...exist, qty: exist.qty+1}:x));
    }
    else{ 
      setCartItems([...cartItems, {...CardProduse, qty:1}]);
    }
  }

  return (
    
     <Router>
      <div className="App">
      <Header />
       <Routes>
         <Route exact path='/' element={<HomeComponent/>}></Route>   
         <Route exact path='/cosulmeu' element={<CosulMeu/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
         <Route path='/despreNoi' element={<Despre/>}></Route>
         <Route path='/conectare' element={<Login />}></Route>
         <Route path='/ciorbe' element={<Ciorbe/>}></Route>
         <Route path='/preparatePui' element={<PreparatePuiApp/>}></Route>
         <Route path='/preparatePorc' element={<PreparatePorc/>}></Route>
         <Route path='/preparateVita' element={<PreparateVita/>}></Route>
         <Route path='/preparatePeste' element={<PreparatePeste/>}></Route>
         <Route path='/garnituri' element={<Garnituri/>}></Route>
         <Route path='/salate' element={<Salate/>}></Route>
         <Route path='/produseextra' element={<ProduseExtra/>}></Route>
         <Route path='/desert' element={<Desert/>}></Route>
         <Route path='/altePreparate' element={<AltePreparate/>}></Route>
         <Route path='/bauturi' element={<Bauturi/>}></Route>
         <Route path='/feluriPrincipale' element={<FeluriPrincipale/>}></Route>
         <Route path='/register' element={<Register/>}></Route>
         

       </Routes>
    
       <Footer />
      </div>
     </Router>

  );
}

export default App;
