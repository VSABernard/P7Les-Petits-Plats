/**
 * Function qui permet de retirer les accents d'une chaine de caratères
 * @param str : la chaine de caractère
 * @returns result : la chaine sans les accents
 */

export function removeAccentFromString(str) {
    const accents ='áàâäãåçéèêëíïîìñóòôöõúùûüýÁÀÂÄÃÅÇÉÈÊËÍÏÎÌÑÓÒÔÖÕÚÙÛÜÝ'
    const withoutAccents ='aaaaaaceeeeiiiinooooouuuuyAAAAAACEEEEIIIINOOOOOUUUUY'
    let result =''

    for(let i = 0, j = str.length; i < j; i++) {
        let caract = str.substr(i, 1)
        result += (accents.indexOf(caract) !== -1) ? withoutAccents.substr(accents.indexOf(caract), 1) : caract
    }
    return result
}
  