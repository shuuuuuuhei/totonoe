import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { FaBeer } from 'react-icons/fa';

import { Header } from './components/Header';
import { Home } from './pages/HomePage';
import { ProfileComponent } from './components/ProfileComponent';
import { ProfilePage } from './pages/ProfilePage';
import { ArticlePostPage } from './pages/ArticlePostPage';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/articles/new" element={<ArticlePostPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
