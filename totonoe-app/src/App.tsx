import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { FaBeer } from 'react-icons/fa';

import { Header } from './components/Header';
import { Home } from './components/Home';
import { SearchBox } from './components/SearchBox';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <SearchBox/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
