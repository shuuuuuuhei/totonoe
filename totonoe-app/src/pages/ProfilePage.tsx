import { useAuth0 } from '@auth0/auth0-react'
import React, { Fragment, useEffect, useState } from 'react'
import { useCookies } from "react-cookie"
import { Navigate, useParams } from 'react-router-dom'
import { Article } from '../@types/article/Article'
import { Profile } from '../@types/Profile'
import { ArticleList } from '../components/ArticleList'
import { ProfileComponent } from '../components/ProfileComponent'

export const ProfilePage = () => {
    const [profile, setProfile] = useState<Profile|null>();
    const [articles, setArticles] = useState<[Article]>();
    const {getAccessTokenSilently} = useAuth0();
    const [cookies, setCookie,removeCookie] = useCookies();

    //ユーザIDをURIパラメータから取得
    const {userID} = useParams();

    useEffect(() => {
        const fetchArticle = async() => {
            
            const accessToken = await getAccessTokenSilently({
                audience: 'https://totonoe-app.com',
                scope: 'read:posts',
            });
            
            if (!accessToken) {
                throw Error("アクセストークンがありません。");
            }
            const uri = "http://localhost:4000/users/"+userID+"/articles/";

            const requestOption: RequestInit = {
                method: "GET",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                    "User-ID": cookies.userID,
                },
            };
            await fetch(uri, requestOption)
            .then((response) => {
                if (!response.ok) {
                    const err = new Error;
                    console.log(response);
                    err.message = "記事が見つかりませんでした。" + response.status;
                    throw err;
                }
                return response.json();
            })
            .then((resData) => {
                setArticles(resData)
                console.log(resData)
            })
            .catch(err => {
                console.log(err)
            });        
        }
        const fetchProfile = async() => {
            
            const uri = "http://localhost:4000/profile";
            const accessToken = await getAccessTokenSilently({
                audience: 'https://totonoe-app.com',
                scope: 'read:posts',
            });

            if (!accessToken) {
                throw Error("アクセストークンがありません。");
            }

            const requestOption: RequestInit = {
                method: "POST",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
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
                console.log(err)
                return(
                    <Navigate to="/" />
                )
            });
        }
        fetchProfile();
        fetchArticle();
    }, []);

    if(!profile) {
        return(
            <Fragment>
                <p>ロード中...</p>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <ProfileComponent profile={profile} setProfile={setProfile} />
            <ArticleList articles={articles} />
        </Fragment>
    )
}
