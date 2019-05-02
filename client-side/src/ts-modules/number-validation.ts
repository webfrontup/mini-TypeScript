namespace Validation {
    export const isNumberReg = /^[0-9+]$/
    export const checkNumber = (text: any) => {
        return isNumberReg.test(text)
    }
}
