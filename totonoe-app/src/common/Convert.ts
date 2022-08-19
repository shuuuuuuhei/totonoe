/**
 * 値を受け取り、Undefinedなら0に変換する
 */
export const UndefinedConvertToZero = (val: number|undefined) => {
    if(!val) {
        return 0;
    }

    return val;
}

/**
 * 文字列を日付フォーマットに変換する
 */
export const StrConvertStrTime = (val: string) => {
    const hh = val.slice(0, 2)
    const ss = val.slice(2, 4)
    return hh+":"+ss
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

