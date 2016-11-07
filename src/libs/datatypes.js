export const isObj = function (val) {
    if (val === null) { return false }
    return (typeof val === 'object' )
}


export const isFunc = function(val) {
    if (val === null) { return false }
    return (typeof val === 'function' )
}


export const isStr = function(val) {
    if (val === null) { return false }
    return ( val.constructor == String )
}



export const isInt = function(val) {
    if (val === null) { return false }
    return ( typeof val === 'number' )
}


export const isArr = function(val) {
    if (val === null) { return false }
    return ( val.constructor == Array )
}
