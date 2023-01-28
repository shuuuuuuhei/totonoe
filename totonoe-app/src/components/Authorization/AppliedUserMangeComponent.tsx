import React, { Component, Fragment, useState, useEffect } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useAuth0 } from '@auth0/auth0-react';
import { useCookies } from 'react-cookie';
import { AppliedUser } from '../../@types/AppliedUser';
import { ErrorPageProps } from '../../@types/ErrorPage';
import { useNavigate } from 'react-router-dom';
import { ConvertErrorMessageToErrorPageProps } from '../../common/Convert';

export const AppliedUserMangeComponent = () => {

    const { getAccessTokenSilently } = useAuth0();
    const [cookies, setCookie, removeCookie] = useCookies();
    const [appliedUserList, setAppliedUser] = useState<AppliedUser[]>();
    const navigate = useNavigate();

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user_id', headerName: 'ユーザーID', width: 130 },
        { field: 'user_name', headerName: 'ユーザー名', width: 200 },
        { field: 'applied_date', headerName: '承認日', width: 200 },
    ];

    useEffect(() => {
        getAppliedAuthList();
    }, [])

    /**
     * 投稿権限申請済ユーザーリストを取得する
     */
    const getAppliedAuthList = async () => {

        const uri = "http://localhost:4000/authorization/applied";
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
                user_id: cookies.userID,
            })
        };
        await fetch(uri, requestOption)
            .then((response) => {
                if (!response.ok) {
                    // レスポンスコードとエラーメッセージを受け取りエラーページに遷移
                    const errorInfo: ErrorPageProps = { statusCode: response.status, message: response.statusText };
                    navigate('/error', { state: errorInfo });
                    return;
                }
                return response.json();
            })
            .then((data: AppliedUser[]) => {
                console.log(data)
                setAppliedUser(data)
            })
            .catch(err => {
                // エラーメッセージを受け取りエラーページの引数を設定する
                const errorInfo: ErrorPageProps = ConvertErrorMessageToErrorPageProps(err.message);
                navigate('/error', { state: errorInfo });
                return;
            });
    }

    if (!appliedUserList) {
        return (
            <Fragment>
                承認中ユーザはいません。
            </Fragment>
        )
    }

    return (
        <Fragment>
            承認済み
            <div style={{ height: 600, width: '100%' }} className="py-3">
                <DataGrid
                    rows={appliedUserList}
                    columns={columns}
                    pageSize={20}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </Fragment>
    )
}