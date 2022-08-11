/**
 * 値を受け取り、Undefinedなら0に変換する
 */
export const UndefinedConvertToZero = (val: number|undefined) => {
    if(!val) {
        return 0;
    }
    return val;
}