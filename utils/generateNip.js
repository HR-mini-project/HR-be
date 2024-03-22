const crypto = require('crypto')

function parseLessThan10(sec){
    if (sec < 10) return '0'+sec
    return sec.toString()
}

function parseMilli(ms){
    if (ms < 10) return '00'+ms
    else if (ms < 100) return '0'+ms
    else return ms

}

function generateNip() {
    const now = new Date()
    const year = now.getFullYear().toString()
    const month = parseLessThan10 ( now.getMonth() )
    const day = parseLessThan10(now.getDay())
    const hour = parseLessThan10(now.getHours())
    const minutes = parseLessThan10(now.getMinutes())
    const sec = parseLessThan10(now.getSeconds())

    const mm = parseMilli(now.getMilliseconds()) 
    console.log(mm)
    const nip =  year.slice(2) + '.' + month  + day  + '.' + hour + minutes + sec + '-' + crypto.randomInt(10)+  mm
    return nip
}

module.exports = generateNip
