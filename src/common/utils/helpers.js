export const formatPrice = (value, plusMinus = false, percent = false, unit = '') => {
    value = String(value)
    while (/(\d+)(\d{3})/.test(value.toString())) {
        //eslint-disable-next-line
        value = value.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2')
    }
    let price = value
    if (percent) { price = `${price}%` }
    if (plusMinus && Number(value.replace(',', '')) > 0) { price = `+${price}` }
    if (unit) { price = `${unit}${price}` }
    return price
}

export const adjustBrightness = (col, amt) => {
    const usePound = true
    if (col[0] === '#') {
        col = col.slice(1)
    }
    let R = parseInt(col.substring(0, 2), 16)
    let G = parseInt(col.substring(2, 4), 16)
    let B = parseInt(col.substring(4, 6), 16)
    R += amt
    G += amt
    B += amt
    if (R > 255) R = 255
    else if (R < 0) R = 0
    if (G > 255) G = 255
    else if (G < 0) G = 0
    if (B > 255) B = 255
    else if (B < 0) B = 0
    const RR = ((R.toString(16).length === 1) ? `0${R.toString(16)}` : R.toString(16))
    const GG = ((G.toString(16).length === 1) ? `0${G.toString(16)}` : G.toString(16))
    const BB = ((B.toString(16).length === 1) ? `0${B.toString(16)}` : B.toString(16))
    return (usePound ? '#' : '') + RR + GG + BB
}