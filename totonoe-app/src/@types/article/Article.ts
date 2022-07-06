export type Article = {
    ID: string,
    Title: string,
    Content: string,
    UserID: string,
    user_name?: string,
    like_count?: number,
    comment_count?: number,
    sauna_name?: string,
    CreatedAt?: string,
}