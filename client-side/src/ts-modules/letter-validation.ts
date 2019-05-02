namespace Validation {
    const isLetterReg = /^[A-Za-z]$/
    export const checkLetter = (text: any) => {
        return isLetterReg.test(text)
    }
}
