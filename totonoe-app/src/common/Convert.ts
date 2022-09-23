/**
 * 値を受け取り、Undefinedなら0に変換する
 */
export const UndefinedConvertToZero = (val: number|undefined) => {
    return !val ? 0 : val
}

/**
 * 値を受け取り、Undefinedなら空文字に変換する
 */
export const UndefinedOrNullConvertToEmpty = (val: string|undefined|null) => {
    return !val ? "" : val
}

/**
 * 文字列を日付フォーマットに変換する
 */
export const StrConvertStrTime = (start: string|undefined, end: string|undefined) => {
    if(!start || !end) {
        return
    }

    // 翌日まで営業しているパターン(例 08:00 ~ (翌)2:00)
    if(parseInt(start.split(":")[0]) >= parseInt(end.split(":")[0])) {
        return(start + "~(翌)"+ end);
    }

    return(start + "~" + end);
}

/**
 * 区分値の変換を行う
 * 1→"○"
 * 1以外→"-"
 */
export const ConvertKBToMaruORHyphen = (kb: string) => {
    if(kb != "1") return "-"
    return "○"
}

/**
 * NaN(非数値)であれば１に変換する
*/
export const ConvertNaNToOne = (num: number) => {
    if(isNaN(num)) return 1
    return num
}
