export type Profile = {
    ID: string
    UserID: string
    NickName: string
    following_count?: number
    followed_count?: number
    IsMe: boolean
    Introduction: string
}