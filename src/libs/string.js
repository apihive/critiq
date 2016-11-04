/**
* @param string - (string) treated as email address
* @return (Boolean)
*/
export default (string) => {
  var regex = /^[a-zA-Z]*$/
  return regex.test(string)
}
