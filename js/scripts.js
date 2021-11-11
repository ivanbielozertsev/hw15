function padString(str, length, symbol, side = true) {
    if (typeof str !== "string") {
        return 'string!'
    } else if (typeof length !== "number" || Number.isNaN(length) || !Number.isFinite(length)) {
        return 'length!'
    } else if (typeof symbol !== "string") {
        return 'symbol!'
    }

    if (length > str.length) {
        const diff = length - str.length;
            for (let i = 0; i < diff; i++) {
            side ? (str += symbol) : (str = symbol + str);
            } 
    } else {
        str = str.substring(0, length);
    }
return (str)
}

console.log(padString('hello', 6, '*'))
