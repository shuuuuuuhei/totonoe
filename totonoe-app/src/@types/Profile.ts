import { User } from "./User"

export type Profile = {
    id: string
    name: string
    following_count: number
    followed_count: number
    is_me: boolean
    is_following: boolean
    introduction: string
    family_name: string
    last_name: string,
    /**
     * フォローリスト
     */
    following_list: User[]
    /**
     * フォロワーリスト
     */
    follower_list: User[]
}