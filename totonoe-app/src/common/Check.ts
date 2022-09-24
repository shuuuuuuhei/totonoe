/**
 * nullまたはundefinedの判定を行う
 */
export const IsNullOrUndefined = (val: any) => {
    if(val === null || !val) return true;
    return false;
}