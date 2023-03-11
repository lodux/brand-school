import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home.page';
import NavBar from './components/navbar/NavBar.component';
import ShowArticle from "./pages/showArticle/ShowArticle.page"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/showArticle" element={<ShowArticle/>} />        
      </Routes>

      
    </div>
  );
}

export default App;
