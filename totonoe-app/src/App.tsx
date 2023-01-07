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
import { UserSettingPage } from './pages/UserSettingPage';
import { AdminPage } from './pages/AdminPage';
import { IsNullOrUndefinedOrEmpty } from './common/Check';

function App() {
  const { user, getIdTokenClaims, getAccessTokenWithPopup, isAuthenticated } = useAuth0();
  const [cookies, setCookie, removeCookie] = useCookies();
  const userID = user?.sub?.split('|').at(1);

  console.log("ログイン情報：", userID, cookies);

  /**
   * ユーザを新規登録する
   */
  const signupUser = async () => {

    if (!user) {
      return;
    }

    // サインアップ処理
    try {
      const accessToken = await getAccessTokenWithPopup({
        audience: 'https://totonoe-app.com',
        scope: 'read:current_user',
      });
      // ユーザー登録
      await fetchSubmitUser(accessToken);

      // 初期権限情報を登録する
      await fetchSubmitInitialAuthorization(accessToken);

      // ユーザーIDをクッキーに保存する
      setUserInfoCookie();

      // サインアップ処理が成功したらメッセージを表示して処理を終了する
      toast.success('ユーザ登録が完了しました！');
      return;
    } catch (error) {
      // サインアップが失敗した場合はAuth0側のユーザー情報を削除する処理を書く

      toast.error('ユーザー登録に失敗しました。');
      return;
    }
  }

  /**
   * ユーザー登録リクエストを送信する(初回ログイン時)
   */
  const fetchSubmitUser = (accessToken: string): Promise<Error> => {
    const fetchSubmitUserPromise: Promise<Error> = new Promise((resolve, reject) => {
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

      const uri = "http://localhost:4000/signup";
      fetch(uri, requestOption)
        .then((response) => {
          if (!response.ok) {
            const err = new Error;
            console.log(response);
            err.message = "ユーザ登録に失敗しました。レスポンスコード：" + response.status + response.statusText;
            throw err;
          }
          // ユーザー登録成功
          resolve(null);
        })
        .catch(err => {
          reject(err);
        });
    });
    return fetchSubmitUserPromise;
  }
  /**
   * 初期権限を登録する
   */
  const fetchSubmitInitialAuthorization = (accessToken: string): Promise<Error> => {
    const fetchSubmitUserPromise: Promise<Error> = new Promise((resolve, reject) => {
      const requestOption: RequestInit = {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "User-ID": cookies.userID,
        },

        body: JSON.stringify({ 'user_id': userID })
      };

      const uri = "http://localhost:4000/authorization/new";
      fetch(uri, requestOption)
        .then((response) => {
          if (!response.ok) {
            const err = new Error;
            console.log(response);
            err.message = "初期権限登録に失敗しました。レスポンスコード：" + response.status + response.statusText;
            throw err;
          }
          return response.json();
        })
        .then(() => {
          // 初期権限登録成功
          resolve(null);
        })
        .catch(err => {
          reject(err);
        });
    });
    return fetchSubmitUserPromise;
  }

  /**
   * ユーザIDをクッキー情報として登録する
   */
  const setUserInfoCookie = () => {
    var now = new Date();
    now.setTime(now.getTime() + 1 * 3600 * 1000);
    setCookie("userID", userID, { expires: now, path: '/' });
  }

  // 画面ロード時
  useEffect(() => {
    // ログイン回数が初回の場合はユーザ新規登録を行う
    if (user?.loginCount === 1 && IsNullOrUndefinedOrEmpty(cookies.userID)) {
      // サインアップ
      signupUser();
    } else if (IsNullOrUndefinedOrEmpty(cookies.userID) && isAuthenticated) {

      // ログイン時にcookieが未発行の場合
      setUserInfoCookie();
      toast.success('おかえりなさい！');
    }

  }, [user])

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
          <Route path="/setting/profile" element={<UserSettingPage />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
