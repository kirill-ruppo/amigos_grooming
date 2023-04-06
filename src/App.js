import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Footer from './components/Footer/Footer';
import BookingPage from './components/BookingPage';
import PricesPage from './components/PricesPage';
import React  from 'react';
function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route  path='/' element={<MainPage/>}></Route>
        <Route  path='/prices' element={<PricesPage/>}></Route>
        <Route  path='/booking' element={<BookingPage/>}></Route>
      </Routes>
    <Footer/>
    </>

  );
}

export default App;
