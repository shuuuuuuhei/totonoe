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
import { toast } from 'react-toastify'


function App() {
  const { user, getIdTokenClaims, getAccessTokenWithPopup, isAuthenticated } = useAuth0();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [isSignUpped, setIsSignUpped] = useState(false);

  // 無駄なレンダリングを検知する
  // if (process.env.NODE_ENV !== 'production') {
  //   const {whyDidYouUpdate} = require('why-did-you-update')
  //   whyDidYouUpdate(React)
  // }

  /**
   * ユーザを新規登録する
   */
  const fetchSubmitUser = async () => {

    const uri = "http://localhost:4000/signup";
    const accessToken = await getAccessTokenWithPopup({
      audience: 'https://totonoe-app.com',
      scope: 'read:current_user',
    });

    if (!accessToken) {
      throw Error("アクセストークンがありません。");
    }

    const submitUser = {
      id: userID,
      name: user?.name,
      email: user?.email,
    }

    const requestOption: RequestInit = {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "User-ID": cookies.userID,
      },
      body: JSON.stringify({ 'user_id': submitUser.id, 'name': submitUser.name, 'email': submitUser.email })
    };
    fetch(uri, requestOption)
      .then((response) => {
        if (!response.ok) {
          const err = new Error;
          console.log(response);
          err.message = "ユーザ登録に失敗しました。レスポンスコード：" + response.status + response.statusText;
          throw err;
        }
        return response.json();
      })
      .then(() => {
        setIsSignUpped(true);
        toast.success('ユーザ登録が完了しました！');
      })
      .catch(err => {
        toast.warning(err)
      });
  }

  /**
   * ユーザIDをクッキー情報として登録する
   */
  const setUserInfoCookie = () => {
    var now = new Date();
    now.setTime(now.getTime() + 1 * 3600 * 1000);
    setCookie("userID", userID, { expires: now, path: '/' });
  }

  const userID = user?.sub?.split('|').at(1);
  console.log(userID, isAuthenticated)
  useEffect(() => {
    if (typeof cookies.userID == 'undefined' && isAuthenticated) {
      setUserInfoCookie();
    }

    // ログイン回数が初回の場合はユーザ新規登録を行う
    if (user?.loginCount === 1 && !isSignUpped) {
      // サインアップ
      fetchSubmitUser().then(() => {
        console.log("success sign up!");
      })
        .catch(() => {
          console.log("失敗")
        })
    } else if(isAuthenticated) {
      toast.success('おかえりなさい！');
    }

  }, [userID])


  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userID" element={<ProfilePage />}></Route>
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
