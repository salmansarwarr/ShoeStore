import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListing from './Containers/Pages/ProductListing';
import Header from './Containers/Header';
import Footer from './Containers/Footer';
import Basket from './Containers/Pages/Basket';
import Details from './Containers/Pages/Detail';

function App() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<ProductListing/>}/>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='/:id' element={<Details/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App