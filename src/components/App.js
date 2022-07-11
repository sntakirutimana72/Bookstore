import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import BookList from './BookList';
import NotFound from './NotFound';
import Categories from './Categories';
import styles from './App.module.css';

const App = () => (
  <BrowserRouter>
    <div className={styles.App}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BookList />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
