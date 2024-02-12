import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import HomePage from './components/HomePage';
import MovieList from './components/MovieList';
function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="movie/:id" element={<h1>Movie Details</h1>} />
          <Route path="movies/:type" element={<MovieList></MovieList>} />
          <Route path="/*"  element={<h1>ERROR 404</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;