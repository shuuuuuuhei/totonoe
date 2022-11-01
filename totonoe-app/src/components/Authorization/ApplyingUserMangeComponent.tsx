import React, { Component, useState, Fragment, useEffect } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useAuth0 } from '@auth0/auth0-react';
import { useCookies } from 'react-cookie';
import { ApplyingUser } from '../../@types/ApplyingUser';
import { TableHead, TableRow, TableCell, Checkbox, TableSortLabel, Button } from '@mui/material';

export const ApplyingUserMangeComponent = () => {
    const [applyingUserList, setApplyingUser] = useState<ApplyingUser[]>();
    const { getAccessTokenSilently } = useAuth0();
    const [cookies, setCookie, removeCookie] = useCookies();
    const [selectedAuthIDs, setSelectedAuthID] = useState([]);

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
        const uri = "http://localhost:4000/authorization/applying";
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
            .then((data: ApplyingUser[]) => {
                console.log(data)
                setApplyingUser(data)
            })
            .catch(err => {
                console.log(err)
            });
    }

    const handleGridSelectChange = (rowIDs: any) => {
        setSelectedAuthID(rowIDs)
    }

    const handleCertificate = () => {
        console.log(selectedAuthIDs);

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