import { RatingProperty } from "../@types/article/Rating";

/**
* 都道府県リスト
*/
export const prefectureList = ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県", "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県", "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"];

/**
* 都道府県リスト(地方別)
*/
export const prefectureListPerArea = {
    "北海道・東北": [
        "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
    ],
    "関東": [
        "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県"
    ],
    "中部": [
        "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県",
    ],
    "近畿": [
        "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
    ],
    "中国・四国": [
        "鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県",
    ],
    "九州・沖縄": [
        "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県",
    ]
}

/**
* サウナタイプリスト
*/
export const saunaTypeList = [
    "遠赤外線サウナ", "ミストサウナ", "スチームサウナ", "塩サウナ", "ケロサウナ", "ボナサウナ", "スモークサウナ", "テントサウナ", "アースサウナ", "アイスサウナ", "バレルサウナ"
]

/**
* サウナオプションリスト
*/
export const saunaOptions = [
    {
        id: 'rouryu_flg',
        name: "ロウリュウ",
    },
    {
        id: 'sauna_mat_flg',
        name: "サウナマット",
    },
    {
        id: 'tv_flg',
        name: "TV",
    },
    {
        id: 'bgm_flg',
        name: "BGM",
    },
]

/**
* 施設設備リスト
*/
export const termsList = [
    {
        id: 'lodging_flg',
        name: "宿泊",
    },
    {
        id: 'restaurant_flg',
        name: "飯処",
    },
    {
        id: 'working_space_flg',
        name: "コワーキングスペース",
    },
    {
        id: 'air_bath_flg',
        name: "外気浴",
    },
    {
        id: 'books_flg',
        name: "読書",
    },
    {
        id: 'water_server_flg',
        name: "給水機",
    },
    {
        id: 'heat_wave_flg',
        name: "熱波師",
    },
];

/**
 * 評価用定数
 */
export const defaultScore = 3;
export const MaxScore = 5;
export const MinScore = 1;
export const precisionScore = 0.5;

/**
 * 評価項目リスト
 */
export const ratingList: RatingProperty[] = [
    {
        name: "ととのい度",
        id: 'totonoi_score',
    },
    {
        name: "心地よさ",
        id: 'relax_score',
    },
    {
        name: "価格満足度",
        id: 'price_score',
    },
    {
        name: "雰囲気",
        id: 'ambience_score',
    },
    {
        name: "サービス",
        id: 'service_score',
    },
]

/**
 * 権限区分：0 (一般ユーザー)
 */
export const GENERAL_USER = '0';

/**
 * 権限区分：1 (投稿可能)
 */
export const APPLY_AUTH_KB = '1';

/**
 * 権限区分：999 (管理者権限)
 */
export const ADMIN_AUTH_KB = '999';

/**
 * 権限申請状態：0 (未申請)
 */
export const UNAPPLIED_STATE = '0'
/**
 * 権限申請状態：1 (申請中)
 */
export const AUTH_REQUESTED_STATE = '1';
/**
 * 権限申請状態：2 (承認済み)
 */
export const AUTH_AUTHORIZED_STATE = '2';

/**
 * 権限申請状態：3 (承認棄却)
 */
export const AUTH_UNAUTHORIZED_STATE = '3';

/**
 * マップライブラリ
 */
export type Libraries = ("drawing" | "geometry" | "localContext" | "places" | "visualization")[];

/**
 * 最小ページ
 */
export const MinPageCount = 1;