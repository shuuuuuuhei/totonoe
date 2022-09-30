export type Article = {
    id: number,
    title: string,
    content: string,
    user_id: string,
    facility_id: string,
    facility_name: string,
    user_name: string,
    like_count: number,
    comment_count: number,
    is_liked: boolean,
    created_at: string,
}