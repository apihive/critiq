var Critiq = require('../app')

var payload = {

  email:'this isIt5',
  username:'user123',
  accountNumber: '1478248799308',
  address:'Some Address'

}

var config = {

  email:['alphaNum','min-55','max-25'],
  username:['alphaNum','min-5','max-15'],
  accountNumber: ['number','min-10','max-16']

}

Critiq.validate(config, payload, function(err,result){

  if(err){
    console.log(err);
    return
  }
  console.log('result')
  console.log(result)

})
