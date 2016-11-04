import isString from './string'
import isInt from './int'

/**
* @param string - (string) treated as email address
* @return (Boolean)
*/
export default (alphaNum) => {

  var regex = /^[a-z0-9]+$/

  if( regex.test(alphaNum) ){

    if ( isString(alphaNum) ){

      return false

    }else if( isInt(alphaNum) ){

      return false

    }else{

      return true

    }

  }else{

    return false

  }

}
