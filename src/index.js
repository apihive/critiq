import email from './libs/email'
import string from './libs/string'
import int from './libs/int'
import {min,max} from './libs/length'
import alphaNum from './libs/alphanumeric'

const validate =  ( config, data, callback ) => {
  var allDataCount = Object.keys(config).length
  var Errors = [];

  var process = {
    config : function(data,conf){
      var paramCount = 0
      for (var i = 0; i < conf.length; i++){
        if(conf[i] == 'email'){
          const status = this.email(data)
          if(!status){return status}
          else{
            paramCount++
            if(paramCount == conf.length){return true}
          }
        }
        if(conf[i] == 'string'){
          const status = this.string(data)
          if(!status){return status}
          else{
            paramCount++
            if(paramCount == conf.length){return true}
          }
        }
        if(conf[i] == 'number'){
          const status = this.int(data)
          if(!status){return status}
          else{
            paramCount++
            if(paramCount == conf.length){return true}
          }
        }
        if(conf[i] == 'alphaNum'){
          const status = this.alphaNum(data)
          if(!status){return status}
          else{
            paramCount++
            if(paramCount == conf.length){return true}
          }
        }
        if(conf[i].indexOf('-') > -1){
          const arr = conf[i].split('-')
          if(arr[0] == 'min'){
            const status = this.min(data,arr[1])
            if(!status){return status}
            else{
              paramCount++
              if(paramCount == conf.length){return true}
            }
          }else if(arr[0] == 'max'){
            const status = this.max(data,arr[1])
            if(!status){return status}
            else{
              paramCount++
              if(paramCount == conf.length){return true}
            }
          }
        }
      }
    },
    email: function(data){
      return email(data)
    },
    string: function(data){
      return string(data)
    },
    int: function(data){
      return int(data)
    },
    min: function(data,length){
      return min(data,length)
    },
    max: function(data,length){
      return max(data,length)
    },
    alphaNum: function(data){
      return alphaNum(data)
    }
  };

  (function(){
    var processCount = 0;
    for (var item in config){
      var critiq = process.config(data[item],config[item])
      if(!critiq){Errors.push(item)}
      processCount++
      if(processCount == allDataCount){
        if(Errors.length > 0){
          const err = 'Error: some parameters failed ['+Errors.toString()+']'
          callback(err,null)
          return
        }
        callback(null,JSON.stringify(data))

      }
    }
  })()
}

const Critiq = {validate:validate}

module.exports = Critiq
