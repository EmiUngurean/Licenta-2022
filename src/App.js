import './App.css';
import Header  from './components/Navbar/header';
import Footer from './components/Navbar/footer';
import Carousel from './components/carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselHomePage from './components/carousel';
import Home from './components/home'

function App() {
  return (
    <div className="App">
      <Header /> 
      <CarouselHomePage/> 
      <Home />
      <Home />
      <Home />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
