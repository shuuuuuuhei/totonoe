import { useAuth0 } from '@auth0/auth0-react'
import React, { Fragment, useEffect, useState } from 'react'
import { useCookies } from "react-cookie"
import { Navigate, useParams, useLocation } from 'react-router-dom'
import { Article } from '../@types/article/Article'
import { Profile } from '../@types/Profile'
import { ArticleList } from '../components/Article/ArticleList'
import { ProfileComponent } from '../components/ProfileComponent'
import { useIsSavedCookieOfUserID, IsNullOrUndefinedOrEmpty } from '../common/Check'
import { toast } from 'react-toastify'
import { Stack } from '@mui/material'

export const ProfilePage = () => {
    const [profile, setProfile] = useState<Profile | null>();
    const [articles, setArticles] = useState<[Article]>();
    const [cookies, setCookie, removeCookie] = useCookies();

    /* 
        toast表示を管理
    */
    const [isShowedToast, setIsShowedToast] = useState(false);
    const location = useLocation();

    //ユーザIDをURIパラメータから取得
    const { userID } = useParams();

    useEffect(() => {

        // 遷移元のメッセージを確認
        if (!isShowedToast && !IsNullOrUndefinedOrEmpty(location.state?.toast)) {

            if (location.state?.toast.status === 'success') {
                // 遷移元で設定したメッセージを表示する
                toast.success(location.state?.toast.message);

                // toastを表示済にする
                setIsShowedToast(true);
            }
        }

        const fetchGetArticle = async () => {


            const uri = "http://localhost:4000/users/" + userID + "/articles/";

            const requestOption: RequestInit = {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "User-ID": cookies.userID ? cookies.userID : "",
                },
            };
            await fetch(uri, requestOption)
                .then((response) => {
                    if (!response.ok) {
                        const err = new Error;
                        err.message = "記事が見つかりませんでした。" + response.status;
                        throw err;
                    }
                    return response.json();
                })
                .then((resData) => {
                    setArticles(resData);
                })
                .catch(err => {
                    console.log(err)
                });
        }
        const fetchProfile = async () => {

            const uri = "http://localhost:4000/profile";

            const requestOption: RequestInit = {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "User-ID": cookies.userID,
                },
                body: JSON.stringify({
                    user_id: userID,
                })
            };
            await fetch(uri, requestOption)
                .then((response) => {
                    if (!response.ok) {
                        const err = new Error;
                        err.message = "プロフィールが見つかりませんでした。" + response.status;
                        throw err;
                    }
                    return response.json();
                })
                .then((resData) => {
                    setProfile(resData);
                })
                .catch(err => {
                    return (
                        <Navigate to="/" />
                    )
                });
        }
        fetchProfile();
        fetchGetArticle();
    }, []);

    if (!profile) {
        return (
            <Fragment>
                ロード中...
            </Fragment>
        )
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row py-5">
                    <div className="col-4 py-5">
                        <ProfileComponent profile={profile} setProfile={setProfile} />
                    </div>
                    <div className="col-8">
                        <ArticleList articles={articles} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
