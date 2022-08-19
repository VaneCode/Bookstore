import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';

const booksData = [
  {
    id: uuidv4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: uuidv4(),
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

const App = () => (
  <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books booksList={booksData} />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  </div>
);

export default App;
