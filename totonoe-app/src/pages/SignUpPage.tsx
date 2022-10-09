import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * サインアップ後に表示するページ
 * ユーザ情報をDBに登録する
 */
export const SignUpPage = () => {

    const auth0Params = useLocation().search;
    const paramsQuery = new URLSearchParams(auth0Params);
    console.log(paramsQuery.get('state'));

    // const data = Buffer.from(paramsQuery.get('state')).toString('base64')
    return(
        <Fragment>
            test
        </Fragment>
    )
}