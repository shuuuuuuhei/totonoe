export type AuthState = {
    /**
     * 申請区分(999: 管理者, 1: 投稿可能, 0: 一般ユーザー)
     */
    auth_kb: string,

    /**
     * 申請状態(0:未申請, 1:申請中, 2: 申請完了, 3: 申請破棄)
     */
    request_state_kb: string,
}