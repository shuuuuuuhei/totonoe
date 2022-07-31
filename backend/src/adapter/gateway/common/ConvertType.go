package common

import "strconv"

// ConvertUInt stringからuint32に変換する
func ConvertUInt(s string) uint32 {
	iNum, _ := strconv.Atoi(s)

	return uint32(iNum)
}
