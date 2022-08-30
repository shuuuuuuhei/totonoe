import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { FaBeer } from 'react-icons/fa';

import { Header } from './components/Header';
import { Home } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { ArticlePostPage } from './pages/ArticlePostPage';
import { ArticlePage } from './pages/ArticlePage';
import { useAuth0 } from '@auth0/auth0-react';
import { useCookies } from 'react-cookie';
import { SearchResultPage } from './pages/SearchResultPage';
import { SaunaPage } from './pages/SaunaPage';
import { SaunaSubmitPage } from './pages/SaunaSubmitPage';

function App() {
  const {user} = useAuth0();
  const [cookies, setCookie, removeCookie] = useCookies();
  
  const userID = user?.sub?.split('|').at(1)
  useEffect(() => {
    if(typeof cookies.userID == 'undefined' && typeof userID !== 'undefined') {
      var now = new Date();
      now.setTime(now.getTime() + 1 * 3600 * 1000);
      setCookie("userID", userID, { expires: now, path: '/' })
    }
  }, [userID])

  return (
    <BrowserRouter>
    <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userID" element={<ProfilePage/>}></Route>
          <Route path="/articles/new" element={<ArticlePostPage />}></Route>
          <Route path="/saunas/:saunaID/articles/:articleID" element={<ArticlePage />}></Route>
          <Route path="/search" element={<SearchResultPage />}></Route>
          <Route path="/saunas/:facilityID" element={<SaunaPage />}></Route>
          <Route path="/saunas/new/" element={<SaunaSubmitPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
