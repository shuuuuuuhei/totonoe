import React, { Component, useState, Fragment, useEffect } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useAuth0 } from '@auth0/auth0-react';
import { useCookies } from 'react-cookie';
import { ApplyingUser } from '../../@types/ApplyingUser';
import { TableHead, TableRow, TableCell, Checkbox, TableSortLabel, Button } from '@mui/material';
import { toast } from 'react-toastify';
import { ErrorPageProps } from '../../@types/ErrorPage';
import { useNavigate } from 'react-router-dom';
import { ConvertErrorMessageToErrorPageProps } from '../../common/Convert';
import { BaseURI, GetTokenSilentlyParams } from '../../utils/constants';

export const ApplyingUserMangeComponent = () => {
    const [applyingUserList, setApplyingUser] = useState<ApplyingUser[]>();
    const { getAccessTokenSilently } = useAuth0();
    const [cookies, setCookie, removeCookie] = useCookies();
    const [selectedAuthIDs, setSelectedAuthID] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getApplyingAuthList();
    }, [])

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user_id', headerName: 'ユーザーID', width: 130 },
        { field: 'user_name', headerName: 'ユーザー名', width: 200 },
        { field: 'request_date', headerName: '申請日', width: 200 },
    ];

    /**
     * 投稿権限申請中ユーザーリストを取得する
     */
    const getApplyingAuthList = async () => {
        const uri = BaseURI + "/authorization/applying";
        const accessToken = await getAccessTokenSilently({
            authorizationParams: GetTokenSilentlyParams
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
            .then((data: ApplyingUser[]) => {
                console.log(data)
                setApplyingUser(data)
            })
            .catch(err => {
                // エラーメッセージを受け取りエラーページの引数を設定する
                const errorInfo: ErrorPageProps = ConvertErrorMessageToErrorPageProps(err.message);
                navigate('/error', { state: errorInfo });
                return;
            });
    }

    const handleGridSelectChange = (rowIDs: any) => {
        setSelectedAuthID(rowIDs)
    }

    // 投稿権限一括承認処理
    const handleCertificate = async () => {
        const uri = BaseURI + "/authorization/certification";
        const accessToken = await getAccessTokenSilently({
            authorizationParams: GetTokenSilentlyParams
        });
        const userID = cookies.userID;

        if (!userID) {
            toast.warning("ユーザーIDが不正です。");
            throw Error("ユーザーIDが不正です。");
        }

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
                admin_user_id: cookies.userID,
                authorize_id_list: selectedAuthIDs,
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
            .then(() => {
                toast.success("権限の承認が完了しました。");
                getApplyingAuthList();
            })
            .catch(err => {
                // エラーメッセージを受け取りエラーページの引数を設定する
                const errorInfo: ErrorPageProps = ConvertErrorMessageToErrorPageProps(err.message);
                navigate('/error', { state: errorInfo });
                return;
            });
    }

    if (applyingUserList) {
        return (
            <Fragment>
                申請中
                <div style={{ height: 600, width: '100%' }} className="py-3">
                    <DataGrid
                        rows={applyingUserList}
                        columns={columns}
                        pageSize={20}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        onSelectionModelChange={(id) => handleGridSelectChange(id)}
                    />
                </div>
                <Button variant="outlined" onClick={handleCertificate}>
                    申請を承認する
                </Button>
            </Fragment>
        )
    }
}