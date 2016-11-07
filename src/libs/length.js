/**
* @param text - (string)
* @param length - (integer)
* @return (Boolean)
*/
export const min = (text,length) => {

    // console.log('min '+(text.toString().length +' = '+ length) );
  return ( text.toString().length >= length )

}

/**
* @param text - (string)
* @param length - (integer)
* @return (Boolean)
*/
export const max = (text,length) => {
  // console.log('max '+(text.length <= length) );
  return ( text.toString().length <= length )

}
