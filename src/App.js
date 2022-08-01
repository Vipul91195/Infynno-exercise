// import logo from './logo.svg';
import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Routes, Route, } from "react-router-dom";
import Scorecard from './component/scorboard';
import Header from './component/header';
import Footer from './component/footer';
import Section from './component/section';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Section />} />
        <Route path='/scorboard/:id' element={<Scorecard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
