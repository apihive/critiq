var Critiq = require('../app')

var payload = {

  email:'rhomnickcoloma@gmail.com',
  username:'user123',
  accountNumber: '4239937392747293',
  address:'Some Address'

}

var config = {

  email:['email','min-5','max-25'],
  username:['alphaNum','min-5','max-15'],
  accountNumber: ['number','max-16','min-16']

}

Critiq.validate(config, payload, function(err,result){

  if(err){
    console.log(err);
    return
  }
  console.log('result')
  console.log(result)

})
