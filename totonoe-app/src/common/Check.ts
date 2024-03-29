import { APPLY_AUTH_KB, ADMIN_AUTH_KB, AUTH_REQUESTED_STATE, AUTH_AUTHORIZED_STATE, GENERAL_USER, AUTH_UNAUTHORIZED_STATE, UNAPPLIED_STATE } from '../utils/constants'
import { AuthState } from '../@types/Authorization';
import { useCookies } from 'react-cookie';

/**
 * nullまたはundefinedまたは空文字の判定を行う
 */
export const IsNullOrUndefinedOrEmpty = (val: any) => {
    if (val === null || !val || val === "") return true;
    return false;
}

/**
 * 管理ユーザーチェック
 * @param authorization
 */
export const isAdminUser = (authorization: AuthState | undefined) => {

    if (IsNullOrUndefinedOrEmpty(authorization)) {
        return false;
    }

    return authorization.auth_kb === ADMIN_AUTH_KB;
}

/**
 * 投稿可能ユーザーチェック
 * @param authorization 
 */
export const isAppliedUser = (authorization: AuthState | undefined) => {
    return authorization.auth_kb === APPLY_AUTH_KB && authorization.request_state_kb === AUTH_AUTHORIZED_STATE
}

/**
 * 申請中ユーザーチェック
 * @param authorization 
 */
export const isApplyingUser = (authorization: AuthState | undefined) => {
    return authorization.request_state_kb === AUTH_REQUESTED_STATE
}

/**
 * 申請棄却ユーザーチェック
 * @param authorization 
 */
export const isUnAuthorizedUser = (authorization: AuthState | undefined) => {
    return authorization.request_state_kb === AUTH_UNAUTHORIZED_STATE
}

/**
 * 一般ユーザー
 * @param authorization 
 */
export const isGeneralUser = (authorization: AuthState | undefined) => {
    return authorization.auth_kb === GENERAL_USER && authorization.request_state_kb === UNAPPLIED_STATE
}

/**
 * クッキー(ユーザーID)が存在するか
 */

export const useIsSavedCookieOfUserID = () => {
    const [cookies, setCookie, removeCookie] = useCookies();

    return !IsNullOrUndefinedOrEmpty(cookies.userID)
}