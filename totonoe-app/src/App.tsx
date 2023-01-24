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
import { toast } from 'react-toastify'
import { UserSettingPage } from './pages/UserSettingPage';
import { AdminPage } from './pages/AdminPage';
import { IsNullOrUndefinedOrEmpty } from './common/Check';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { ErrorFallback } from './pages/Error/ErrorComponent';
import { ErrorPage404 } from './pages/Error/Page404';
import { ErrorPage } from './pages/Error/ErrorPage';
import { Button } from '@mui/material';

export const App = () => {
  const { user, getIdTokenClaims, getAccessTokenWithPopup, isAuthenticated, logout } = useAuth0();
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

      // ユーザーIDをクッキーに保存する
      setUserInfoCookie();

      // サインアップ処理が成功したらメッセージを表示して処理を終了する
      toast.success('ユーザ登録が完了しました！');
      return;
    } catch (error) {
      toast.error('ユーザー登録に失敗しました。');
      return;
    }
  }

  /**
   * ユーザー登録処理(初回ログイン時)
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

      const uri = "http://localhost:4000/account/new";
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
   * アカウント情報取得処理
   */
  const getAccountInfo = async () => {
    const accessToken = await getAccessTokenWithPopup({
      audience: 'https://totonoe-app.com',
      scope: 'read:current_user',
    });

    const requestOption: RequestInit = {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "User-ID": cookies.userID,
      },
    };

    const uri = "http://localhost:4000/account/" + userID;
    fetch(uri, requestOption)
      .then((response) => {
        if (!response.ok) {
          const err = new Error;
          err.message = "アカウント情報取得処理に失敗しました。レスポンスコード：" + response.status + response.statusText;
          // Auth0にユーザー情報が存在するがDB側に存在しなかったケース(App管理者がユーザーをAuth0ユーザーを削除する必要がある)
          if (response.status === 404) {
            toast.error('このアカウントは使用できません。');
            throw err;
          }
          toast.error('アカウント情報が取得できませんでした。');
          throw err;
        }
      })
      .then(() => {
        toast.success('おかえりなさい！');
      })
      .catch(err => {
        console.log(err);

        // クッキー情報を削除する
        removeCookie("userID", { path: '/' });

        // リダイレクトするとメッセージ表示が消えるため、3秒後にログアウト処理を実施する
        setTimeout(() => logout({ returnTo: window.location.origin }), 3000);
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

  // 画面ロード時
  useEffect(() => {
    // ログイン回数が初回の場合はユーザ新規登録を行う
    if (user?.loginCount === 1 && IsNullOrUndefinedOrEmpty(cookies.userID)) {
      // サインアップ
      signupUser();
    } else if (IsNullOrUndefinedOrEmpty(cookies.userID) && isAuthenticated) {

      // アカウント情報取得
      getAccountInfo();

      // ログイン時にcookieが未発行の場合
      setUserInfoCookie();
    }

  }, [user])

  return (
    <div>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Header />
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
            <Route path="/setting/profile" element={<UserSettingPage />}></Route>
            <Route path="/admin" element={<AdminPage />}></Route>
            <Route path="*" element={<ErrorPage404 />}></Route>
            <Route path="/error" element={<ErrorPage />}></Route>
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}


