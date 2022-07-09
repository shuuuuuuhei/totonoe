import { useAuth0 } from '@auth0/auth0-react'
import React, { Component, Fragment, useEffect, useState } from 'react'
import {Navigate, useParams} from 'react-router-dom'
import { Article } from '../@types/article/Article'
import { Profile } from '../@types/Profile'
import { ArticleList } from '../components/ArticleList'
import { ProfileComponent } from '../components/ProfileComponent'

type ProfilePageProps = {
    userID: string
}

export const ProfilePage = () => {
    const [profile, setProfile] = useState<Profile|null>();
    const [articles, setArticles] = useState<[Article]>();
    const {getAccessTokenSilently, user} = useAuth0();
    //ユーザIDをURIパラメータから取得
    const {userID} = useParams();
    console.log("for rest commit")
    useEffect(() => {
        const fetchArticle = async() => {
            
            const accessToken = await getAccessTokenSilently({
                audience: 'https://totonoe-app.com',
                scope: 'read:posts',
            });
            
            if (!accessToken || !user) {
                throw Error("アクセストークンがありません。");
            }
            const uri = "http://localhost:4000/articles/"+userID;

            const requestOption: RequestInit = {
                method: "GET",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
            };
            await fetch(uri, requestOption)
            .then((response) => {
                if (!response.ok) {
                    const err = new Error;
                    console.log(response);
                    err.message = "記事が見つかりませんでした。" + response.status;
                    throw err;
                };
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

            if (!accessToken || !user) {
                throw Error("アクセストークンがありません。");
            }


            const requestOption: RequestInit = {
                method: "POST",
                mode: "cors",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: userID, my_id: user?.sub?.split('|').at(1),
                })
            };
            console.log(requestOption)
            await fetch(uri, requestOption)
            .then((response) => {
                if (!response.ok) {
                    const err = new Error;
                    console.log(response);
                    err.message = "プロフィールが見つかりませんでした。" + response.status;
                    throw err;
                };
                return response.json();
            })
            .then((resData) => {
                setProfile(resData);
                setProfile((prevState) => (
                    prevState ? { ...prevState, IsMe: userID === user?.sub?.split('|').at(1),} : null
                ))
                console.log(profile)
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
    }, [user]);

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
            <ArticleList articles={articles}/>
        </Fragment>
    )
}
