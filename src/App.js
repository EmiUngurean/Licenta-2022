import './App.css';
import Header  from './components/Navbar/header';
import Footer from './components/Navbar/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselHomePage from './components/carousel';
import Home from './components/home';
import HomePage from './components/homePage';

function App() {
  return (
    <div className="App">
      <Header /> 
      <CarouselHomePage/> 
      <Home />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
