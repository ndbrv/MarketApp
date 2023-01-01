
import './App.css';
import HomeCarousel from './components/HomeCarousel.tsx';
import Navbar from './components/Navbar.tsx';
import CategoryCard from './components/CategoryCard.tsx';
import CardRow from './components/CardRow.tsx';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HomeCarousel></HomeCarousel>
      <CardRow></CardRow>
      
      
    </div>
  );
}

export default App;
