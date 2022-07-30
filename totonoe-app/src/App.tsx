import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { FaBeer } from 'react-icons/fa';

import { Header } from './components/Header';
import { Home } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { ArticlePostPage } from './pages/ArticlePostPage';
import { ArticlePage } from './pages/ArticlePage';
import { useAuth0 } from '@auth0/auth0-react';
import { useCookies } from 'react-cookie';

function App() {
  const {user} = useAuth0();
  const [cookies, setCookie] = useCookies();
  
  const userID = user?.sub?.split('|').at(1)
  
  if(cookies.userID == '' && typeof userID !== 'undefined') {
    var now = new Date();
    now.setTime(now.getTime() + 1 );
    setCookie("userID", userID, { expires: now, path: '/' })
  }

  return (
    <BrowserRouter>
    <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userID" element={<ProfilePage/>}></Route>
          <Route path="/articles/new" element={<ArticlePostPage />}></Route>
          <Route path="/saunas/:saunaID/articles/:articleID" element={<ArticlePage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
