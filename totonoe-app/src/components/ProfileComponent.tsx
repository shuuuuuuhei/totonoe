import { useAuth0 } from '@auth0/auth0-react';
import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { CgDetailsMore } from 'react-icons/cg';
import { MdInsertEmoticon } from 'react-icons/md';
import { Profile } from '../@types/Profile';
import { UndefinedConvertToZero } from '../common/Convert';
import { toast } from 'react-toastify';
import { useErrorHandler } from 'react-error-boundary';
import { ErrorPageProps } from '../@types/ErrorPage';
import { useNavigate } from 'react-router-dom';
import { BaseURI } from '../utils/constants';



type profileProps = {
    profile: Profile | undefined
    setProfile: React.Dispatch<React.SetStateAction<Profile | null | undefined>>
}
export const ProfileComponent: React.VFC<profileProps> = ({ profile, setProfile }) => {
    const { getAccessTokenSilently } = useAuth0();
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();

    const handleError = useErrorHandler();
    const handleFollow = async () => {

        // // クッキー情報がない場合はトップ画面に遷移する
        // if (!useIsSavedCookieOfUserID) {
        //     navigate("/");
        //     return;
        // }

        try {
            const uri = BaseURI + "/follow";
            let accessToken = ""
            try {
                accessToken = await getAccessTokenSilently({
                    audience: 'https://totonoe-app.com',
                    scope: 'read:posts',
                });
            } catch (error) {
                toast.warning("ログインしてください");
                return;
            }
            const requestOption: RequestInit = {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 'user_id': cookies.userID, "following_id": profile?.user_id })
            }
            fetch(uri, requestOption)
                .then((response) => {
                    if (!response.ok) {
                        // レスポンスコードとエラーメッセージを受け取りエラーページに遷移
                        const errorInfo: ErrorPageProps = { statusCode: response.status, message: response.statusText };
                        navigate('/error', { state: errorInfo });
                        return;
                    }
                    return response.json();
                })
                .then(data => {
                    setProfile((prevState) => (
                        prevState ? { ...prevState, is_following: true, followed_count: UndefinedConvertToZero(prevState.followed_count) + 1, } : null
                    ))
                })
        }
        catch (err) {
            handleError(err);
        }
    }

    const handleUnfollow = async () => {
        if (!cookies.userID) {
            return
        }

        try {
            const uri = BaseURI + "/unfollow";
            let accessToken = ""
            try {
                accessToken = await getAccessTokenSilently({
                    audience: 'https://totonoe-app.com',
                    scope: 'read:posts',
                });
            } catch (error) {
                toast.warning("ログインしてください")
                return;
            }
            const requestOption: RequestInit = {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 'user_id': cookies.userID, "following_id": profile?.user_id })
            }
            fetch(uri, requestOption)
                .then((response) => response.json())
                .then(data => {
                    setProfile((prevState) => (
                        prevState && prevState.followed_count ? { ...prevState, is_following: false, followed_count: prevState.followed_count - 1, } : null
                    ))
                })
        }
        catch (err) {
        }
    }





    return (
        <Fragment>
            <div className="container profile-wrap">
                <div className="user-info">
                    <div className="row">
                        <div className="user-image">
                            <MdInsertEmoticon size={50} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="user-name">
                            <div className="name">
                                @{profile?.name}
                            </div>
                        </div>
                    </div>
                    <div className="row py-3 border-bottom">
                        {profile?.is_me
                            ? ""
                            :
                            profile?.is_following ?
                                <div className="follow-btn">
                                    <Button onClick={handleUnfollow}>フォロー中</Button>
                                </div>
                                :
                                <div className="follow-btn">
                                    <Button onClick={handleFollow}>フォローする</Button>
                                </div>
                        }
                    </div>
                    <div className="follow-info row py-3 ">
                        <p className="col-6">フォロワー{profile?.followed_count ? profile?.followed_count : 0}人</p>
                        <p className="col-6">フォロー{profile?.following_count ? profile?.following_count : 0}人</p>
                    </div>
                    <div className="row">
                        <div className="user-introduce">
                            {profile?.introduction}
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}
