import React, { Component, Fragment, useState, useEffect } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useAuth0 } from '@auth0/auth0-react';
import { useCookies } from 'react-cookie';
import { AppliedUser } from '../../@types/AppliedUser';

export const AppliedUserMangeComponent = () => {

    const { getAccessTokenSilently } = useAuth0();
    const [cookies, setCookie, removeCookie] = useCookies();
    const [appliedUserList, setAppliedUser] = useState<AppliedUser[]>();

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
                    const err = new Error;
                    err.message = "申請中ユーザーリストが取得できませんでした" + response.text + response.status;
                    throw err;
                }
                return response.json();
            })
            .then((data: AppliedUser[]) => {
                console.log(data)
                setAppliedUser(data)
            })
            .catch(err => {
                console.log(err)
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