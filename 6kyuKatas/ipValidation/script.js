function isValidIP(str) {
    let newIp = str.split('.')

    let result = true

    if(newIp === '' || newIp.length !== 4) {
        return false
    }

    let checkAlphabet = /([a-z]+)/i
    let checkSpace = /\s/gmi

    for (let i = 0; i < newIp.length; i++) {

        let itemSplit = newIp[i].split('')

        if (itemSplit[0] == 0 && itemSplit[1] >= 0 || itemSplit[0] == '-') {
            result = false
        }

        if (newIp[i] > 255 || newIp[i] < 0 || checkAlphabet.test(newIp[i]) || checkSpace.test(newIp[i]) || newIp[i] === '') {
            result = false
        }
    }

    return result
}


console.debug(isValidIP('87.248.251.'));