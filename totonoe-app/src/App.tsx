import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/_Top/Header';
import { ArticlePage } from './pages/Article/ArticlePage';
import { ArticlePostPage } from './pages/Article/ArticlePostPage';
import { SaunaPage } from './pages/Facility/FacilityPage';
import { SaunaSubmitPage } from './pages/Facility/FacilitySubmitPage';
import { Home } from './pages/HomePage';
import { ProfilePage } from './pages/User/ProfilePage';
import { SearchMapPage } from './pages/Map/SearchMapPage';
import { SearchResultPage } from './pages/Facility/SearchResultPage';
import { toast } from 'react-toastify'
import { UserSettingPage } from './pages/User/UserSettingPage';
import { AdminPage } from './pages/AdminPage';
import { IsNullOrUndefinedOrEmpty } from './common/Check';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { ErrorFallback } from './pages/Error/ErrorComponent';
import { ErrorPage404 } from './pages/Error/Page404';
import { ErrorPage } from './pages/Error/ErrorPage';
import { Button } from '@mui/material';
import { BaseURI, GetTokenSilentlyParams } from './utils/constants';

export const App = () => {
  const { user, getIdTokenClaims, getAccessTokenWithPopup, isAuthenticated, logout } = useAuth0();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [isLoggined, setIsLoggined] = useState(false);

  console.log("ログイン情報：", user?.sub?.split('|').at(1), cookies.userID, user?.sub);

  /**
   * ユーザを新規登録する
   */
  const signupUser = async () => {

    if (!user) {
      return;
    }

    // サインアップ処理
    try {
      const accessToken = await getAccessTokenWithPopup({ authorizationParams: GetTokenSilentlyParams });

      // ユーザー登録
      await fetchSubmitUser(accessToken);

      // ユーザーIDをクッキーに保存する
      setUserInfoCookie();

      // サインアップ処理が成功したらメッセージを表示して処理を終了する
      toast.success('ユーザ登録が完了しました！');
      return;
    } catch (error) {
      toast.error('ユーザー登録に失敗しました。');
      // リダイレクトするとメッセージ表示が消えるため、3秒後にログアウト処理を実施する
      setTimeout(() => logout(), 3000);
      return;
    }
  }

  /**
   * ユーザー登録処理(初回ログイン時)
   */
  const fetchSubmitUser = (accessToken: string): Promise<Error> => {
    const fetchSubmitUserPromise: Promise<Error> = new Promise((resolve, reject) => {
      const submitUser = {
        id: user?.sub?.split('|').at(1),
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

      const uri = BaseURI + "/account/new";
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

  const loginUser = () => {
    // アカウント情報取得
    getAccountInfo();

    // ログイン時にcookieが未発行の場合
    setUserInfoCookie();
  }

  /**
   * アカウント情報取得処理
   */
  const getAccountInfo = async () => {
    const accessToken = await getAccessTokenWithPopup({ authorizationParams: GetTokenSilentlyParams });

    const requestOption: RequestInit = {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "User-ID": cookies.userID,
      },
    };

    const uri = BaseURI + "/account/" + user?.sub?.split('|').at(1);
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
        // ログイン済みにして再レンダリングを防ぐ
      })
      .catch(err => {
        console.log(err);

        // クッキー情報を削除する
        removeCookie("userID", { path: '/' });

        // リダイレクトするとメッセージ表示が消えるため、3秒後にログアウト処理を実施する
        setTimeout(() => logout({ logoutParams: { returnTo: window.location.origin } }), 3000);
      });
  }

  /**
   * ユーザIDをクッキー情報として登録する
   */
  const setUserInfoCookie = () => {
    var now = new Date();
    now.setTime(now.getTime() + 1 * 3600 * 1000);
    setCookie("userID", user?.sub?.split('|').at(1), { expires: now, path: '/' });
  }

  // 画面ロード時
  useEffect(() => {
    // Auth0ログイン済かつログイン処理未完了の場合
    if (isAuthenticated && !isLoggined) {

      try {
        // ログイン回数が初回の場合はユーザ新規登録を行う
        if (user?.loginCount === 1) {
          // サインアップ
          signupUser();
        } else {
          // ログイン処理
          loginUser();
        }
        // ログイン済状態に更新する
        setIsLoggined(true);
      }
      catch (error) {

      }
    }
  }, [user])

  return (
    <div>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Header isLoggined={isLoggined} setIsLoggined={setIsLoggined} />
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


