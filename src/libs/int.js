/**
* @param int - (int) treated as number
* @return (Boolean)
*/
export default (int) => {
  var regex = /^[0-9]*$/
  return regex.test(int)
}
