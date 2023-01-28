import { ErrorPageProps } from '../@types/ErrorPage';
import { ErrorCodeWithMessage, prefectureList } from '../utils/constants';
/**
 * 値を受け取り、Undefinedなら0に変換する
 */
export const UndefinedConvertToZero = (val: number | undefined) => {
    return !val ? 0 : val
}

/**
 * 値を受け取り、Undefinedなら空文字に変換する
 */
export const UndefinedOrNullConvertToEmpty = (val: string | undefined | null) => {
    return !val ? "" : val
}

/**
 * 文字列を日付フォーマットに変換する
 */
export const StrConvertStrTime = (start: string | undefined, end: string | undefined) => {
    if (!start || !end) {
        return
    }

    // 翌日まで営業しているパターン(例 08:00 ~ (翌)2:00)
    if (parseInt(start.split(":")[0]) >= parseInt(end.split(":")[0])) {
        return (start + "~(翌)" + end);
    }

    return (start + "~" + end);
}

/**
 * 区分値の変換を行う
 * 1→"○"
 * 1以外→"-"
 */
export const ConvertKBToMaruORHyphen = (kb: string) => {
    if (kb != "1") return "-"
    return "○"
}

/**
 * NaN(非数値)であれば１に変換する
*/
export const ConvertNaNToOne = (num: number) => {
    if (isNaN(num)) return 1
    return num
}

/**
 * 都道府県名からインデックスを取得
 * @param prefectureName 
 */
export const ConvertPrefectureNameToIndex = (prefectureName: string) => {
    return prefectureList.indexOf(prefectureName)
}

/**
 *  サーバから取得した日付を表示用に置換する
 */
export const SetDateFormat = (rowDate: string | undefined) => {
    if (!rowDate) {
        return rowDate
    }
    var convertedDate = rowDate.split('T').at(0)
    return convertedDate
}

/**
 * エラーメッセージからに変換する
 */
export const ConvertErrorMessageToErrorPageProps = (errMessage: string): ErrorPageProps => {

    let errorInfo: ErrorPageProps;

    if (errMessage === "Failed to fetch") {
        errorInfo = { statusCode: 503, message: "サーバーが応答していません。もう少し時間をあけてからアクセスしてください。" };
    }

    // ステータスコードがない場合
    return errorInfo;
}
/**
 * エラーコードからエラーメッセージに変換する
 */
export const ConvertErrorCodeToErrorMessage = (statusCode: number): ErrorPageProps => {

    const errorInfo: ErrorPageProps = ErrorCodeWithMessage.find((value) => {
        return statusCode === value.statusCode;
    });


    return errorInfo;
}