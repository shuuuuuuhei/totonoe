/**
 * エラーページの引数型を設定
 */
export type ErrorPageProps = {
    /**
     * ステータスコード
     */
    statusCode: number,

    /**
     * エラーメッセージ
     */
    message: string
}