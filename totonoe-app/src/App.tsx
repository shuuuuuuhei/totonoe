import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { ArticlePage } from './pages/ArticlePage';
import { ArticlePostPage } from './pages/ArticlePostPage';
import { SaunaPage } from './pages/FacilityPage';
import { SaunaSubmitPage } from './pages/FacilitySubmitPage';
import { Home } from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import { SearchMapPage } from './pages/SearchMapPage';
import { SearchResultPage } from './pages/SearchResultPage';
import { SignUpPage } from './pages/SignUpPage';


function App() {
  const {user, getIdTokenClaims, getAccessTokenSilently} = useAuth0();
  const [loginCount, setLoginCount] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies();

  const getUserInfo = async() => {
    const user = await getIdTokenClaims();
    setLoginCount(user?.loginCount);
  }

  getUserInfo();
  console.log("ログイン回数：",user?.loginCount)
  /**
   * ユーザを新規登録する
   */
  const fetchSubmitUser = async() => {

    const uri = "http://localhost:4000/signup";
    const accessToken = await getAccessTokenSilently({
        audience: 'https://totonoe-app.com',
        scope: 'read:posts',
    });
    const submitUser = {
      id: userID,
      name: user?.name,
      email: user?.email
    }
    console.log(submitUser)
    const requestOption: RequestInit = {
        method: "POST",
        mode: "cors",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            "User-ID": cookies.userID,
        },
        body: JSON.stringify({'user_id':submitUser.id, 'name':submitUser.name, 'email': submitUser.email })
    };
    fetch(uri, requestOption)
      .then((response) => {
          if (!response.ok) {
              const err = new Error;
              console.log(response);
              err.message = "ユーザ登録に失敗しました。レスポンスコード：" + response.status;
              throw err;
          }
          return response.json();
      })
      .then(() => {
          
      })
      .catch(err => {
          console.log(err)
      });       
  }

  const userID = user?.sub?.split('|').at(1);
  useEffect(() => {
    if(typeof cookies.userID == 'undefined' && typeof userID !== 'undefined') {
      var now = new Date();
      now.setTime(now.getTime() + 1 * 3600 * 1000);
      setCookie("userID", userID, { expires: now, path: '/' })
    }

    // ログイン回数が初回の場合はユーザ新規登録を行う
    if(user?.loginCount === 1) {
      console.log("test")
      // サインアップ
      fetchSubmitUser().then(() => {
        console.log("success sign up!");
      })
      .catch(() => {
        console.log("失敗")
      })
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
          <Route path="/saunas/:facilityID/articles/new" element={<ArticlePostPage />}></Route>
          <Route path="/articles/:articleID" element={<ArticlePage />}></Route>
          <Route path="/search" element={<SearchResultPage />}></Route>
          <Route path="/saunas/:facilityID" element={<SaunaPage />}></Route>
          <Route path="/saunas/new/" element={<SaunaSubmitPage />}></Route>
          <Route path="/map" element={<SearchMapPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
