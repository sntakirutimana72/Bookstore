import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import NotFound from './components/NotFound';
import Categories from './components/Categories';
import styles from './App.module.css';

const App = () => (
  <div className={styles.App}>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<BookList />} />
      <Route exact path="/categories" element={<Categories />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
