export type Article = {
    id: number,
    content: string,
    user_id: string,
    facility_id: string,
    facility_name: string,
    user_name: string,
    like_count: number,
    comment_count: number,
    totonoi_score: number,
    relax_score: number,
    price_score: number,
    service_score: number,
    ambience_score: number,
    is_liked: boolean,
    admission_date: string
    created_at: string,
    prefecture_id: number
}