import email from './libs/email'
import alphabet from './libs/alphabet'
import number from './libs/number'
import {min,max} from './libs/length'
import alphaNum from './libs/alphanumeric'
import * as Type from './libs/datatypes'

const validate =  ( config, data, callback ) => {
  var Errors = [];

  var processObject = {
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
        if(conf[i] == 'alphabet'){
          const status = this.alphabet(data)
          if(!status){return status}
          else{
            paramCount++
            if(paramCount == conf.length){return true}
          }
        }
        if(conf[i] == 'number'){
          const status = this.number(data)
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
        // Datatypes

        if(conf[i] == 'string'){
          const status = this.string(data)
          if(!status){return status}
          else{
            paramCount++
            if(paramCount == conf.length){return true}
          }
        }
        if(conf[i] == 'integer'){
          const status = this.integer(data)
          if(!status){return status}
          else{
            paramCount++
            if(paramCount == conf.length){return true}
          }
        }
        if(conf[i] == 'function'){
          const status = this.function(data)
          if(!status){return status}
          else{
            paramCount++
            if(paramCount == conf.length){return true}
          }
        }
        if(conf[i] == 'object'){
          const status = this.object(data)
          if(!status){return status}
          else{
            paramCount++
            if(paramCount == conf.length){return true}
          }
        }
        if(conf[i] == 'array'){
          const status = this.array(data)
          if(!status){return status}
          else{
            paramCount++
            if(paramCount == conf.length){return true}
          }
        }

        //end Datatypes
      }
    },
    string: function(data){
      return Type.isStr(data)
    },
    integer: function(data){
      return Type.isInt(data)
    },
    function: function(data){
      return Type.isFunc(data)
    },
    object: function(data){
      return Type.isObj(data)
    },
    array: function(data){
      return Type.isArr(data)
    },
    email: function(data){
      return email(data)
    },
    alphabet: function(data){
      return alphabet(data)
    },
    number: function(data){
      return number(data)
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

  var processArray = {
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
        if(conf[i] == 'alphabet'){
          const status = this.alphabet(data)
          if(!status){return status}
          else{
            paramCount++
            if(paramCount == conf.length){return true}
          }
        }
        if(conf[i] == 'number'){
          const status = this.number(data)
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
        // Datatypes

        if(conf[i] == 'string'){
          const status = this.string(data)
          if(!status){return status}
          else{
            paramCount++
            if(paramCount == conf.length){return true}
          }
        }
        if(conf[i] == 'integer'){
          const status = this.integer(data)
          if(!status){return status}
          else{
            paramCount++
            if(paramCount == conf.length){return true}
          }
        }
        if(conf[i] == 'function'){
          const status = this.function(data)
          if(!status){return status}
          else{
            paramCount++
            if(paramCount == conf.length){return true}
          }
        }
        if(conf[i] == 'object'){
          const status = this.object(data)
          if(!status){return status}
          else{
            paramCount++
            if(paramCount == conf.length){return true}
          }
        }
        if(conf[i] == 'array'){
          const status = this.array(data)
          if(!status){return status}
          else{
            paramCount++
            if(paramCount == conf.length){return true}
          }
        }

        //end Datatypes
      }
    },
    string: function(data){
      return Type.isStr(data)
    },
    integer: function(data){
      return Type.isInt(data)
    },
    function: function(data){
      return Type.isFunc(data)
    },
    object: function(data){
      return Type.isObj(data)
    },
    array: function(data){
      return Type.isArr(data)
    },
    email: function(data){
      return email(data)
    },
    alphabet: function(data){
      return alphabet(data)
    },
    number: function(data){
      return number(data)
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

    if(config.constructor === Array){
      const critiq = processArray.config(data,config)
      if(!critiq){
        const err = 'Error: validation failed!'
        callback(err,null)
        return
      }

      callback(null,data)
    }else{
      var processCount = 0;
      for (var item in config){
        var critiq = processObject.config(data[item],config[item])
        if(!critiq){Errors.push(item)}
        processCount++
        if(processCount == Object.keys(config).length){
          if(Errors.length > 0){
            const err = 'Error: some parameters failed ['+Errors.toString()+']'
            callback(err,null)
            return
          }
          callback(null,JSON.stringify(data))

        }
      }
    }
  })()
}

const Critiq = {validate:validate}

module.exports = Critiq
