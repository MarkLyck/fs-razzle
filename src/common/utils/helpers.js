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