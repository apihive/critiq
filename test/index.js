var Critiq = require('../app')

var payload = {

  email:'rhomnickcoloma@gmail.com',
  username:'user123',
  accountNumber: 1478248799308456,
  callback:function(){},
  education:{
    highschool:'name of highschool',
    college:'name of college school',
    awards:{
      award1:'Award1 name',
      award2:'Award2 name',
      award3:'Award3 name',
    }
  },
  friends:['tina','james']


}

var config = {

  email:['string','email','required'],
  username:['string','alphaNum','min-5','max-15'],
  accountNumber: ['integer','min-10','max-16'],
  callback: ['function'],
  education: ['object', {
    highschool: ['string','min-500'], // has error for testing
    college: ['string','min-5'],
    awards:['object',{
      award1:['number'] //has error for testing
    }]
  }],
  friends: ['array']

}

Critiq.validate(config, payload, function(err,result){

    if(err){
      console.log(err);
      return
    }
    console.log('Hooray data is valid!')
    // console.log(result)

  })
