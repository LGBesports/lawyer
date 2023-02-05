
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './comps/Header/Header';
import Home from './pages/Home/Home';
import Footer from './comps/Footer/Footer';
import Header2 from './comps/Header2/Header2'
import List from './pages/List/List';
import Item from './pages/Item/Item';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="App">
        
        <Routes>
        <Route
            path='/'
            element={
              <Header />
            }
          />
        <Route
            path='/list/buy//*'
            element={
              <Header2 />
            }
          />
        </Routes>
        
        <Routes>
          <Route
            path='/'
            element={
              <Home />
            }
          />
          <Route
            path='/list/buy//*'
            element={
              <List />
            }
          />
          <Route
            path='/id=1/'
            element={
              <Item />
            }
          />
          <Route
            path='/id=1/2'
            element={
              <Item />
            }
          />
          <Route
            path='/id=1/3'
            element={
              <Item />
            }
          />
          <Route
            path='/id=1/4'
            element={
              <Item />
            }
          />


        </Routes>

        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
