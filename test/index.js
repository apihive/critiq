var Critiq = require('../app')

var payload = {

  email:'rhomnickcoloma@gmail.com',
  username:'user123',
  accountNumber: 1478248799308456,
  callback:function(){},
  friends:['tina','james'],
  education:{
    highschool:'name of highschool',
    college:'name of college school'
  }


}

var config = {

  email:['string','email','min-5','max-25'],
  username:['string','alphaNum','min-5','max-15'],
  accountNumber: ['integer','min-10','max-16'],
  callback: ['function'],
  friends: ['array'],
  education: ['object']

}

Critiq.validate(
  config,
  payload,
  function(err,result){

    if(err){
      console.log(err);
      return
    }
    console.log('result')
    console.log(result)

  }
)
