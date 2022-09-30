/**
 * nullまたはundefinedまたは空文字の判定を行う
 */
export const IsNullOrUndefinedOrEmpty = (val: any) => {
    if(val === null || !val || val === "") return true;
    return false;
}