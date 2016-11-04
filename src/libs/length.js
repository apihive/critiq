/**
* @param text - (string)
* @param length - (integer)
* @return (Boolean)
*/
export const min = (text,length) => {

  return ( text.length >= length )

}

/**
* @param text - (string)
* @param length - (integer)
* @return (Boolean)
*/
export const max = (text,length) => {

  return ( text.length <= length )

}
