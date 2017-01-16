# Critiq
Critiq is a simple parameter validator useful for API building.

### NEW FEATURES
* Nested Object Validation

### Installation
```javascript
npm install critiq --save
```

### Usage
```javascript
// CommonJS
var Critiq = require('critiq')

// EcmaScript
import Critiq from 'critiq'
```

#### Configuration
Indicate the fields to validate -- Fields should be in the data object

* **required** - ['required'] required fields
* **object** - ['object'] Expects an object
* **function** - ['function'] Expects a function
* **array** - ['array'] Expects an array
* **string** - ['string'] Expects a string 'chracters&()$1234@'
* **integer** - ['integer'] Expects a pure integer not a string `12345` not `"12345"`
* **email** - validates an email.
* **alphabet** - (string) that contains strictly of letters from **Aa** to **Zz** only.
* **number** - (string) that contains strictly of numbers from **0** to **9** only.
* **alphaNum** - accepts a string containing strictly of numbers and letters *(Non-case sensitive) (accepts space)*.
* **min** - ['min-5'] indicates a minimum required characters.
* **max** - ['max-25'] indicates a maximum required characters.

#### FORBIDDEN COMBINATIONS
> * ['string','integer']
> * ['string','function']
> * ['string','object']
> * ['string','array']
> * ['integer','function']
> * ['integer','object']
> * ['integer','array']
> * ['array','function']
> * ['array','object']
> * ['object','function']

#### NO POSSIBLE COMBINATION
> * ['function']
> * ['array']

#### Single Param Validations
Strictly solo Datatype Validations

Example **String** ( min and max are allowed )
```javascript
Critiq.validate(['string'], 'asdfasdf', function(err,result){})
```
Example **Integer** ( min and max are allowed )
```javascript
Critiq.validate(['integer'], 23554667, function(err,result){})
```
Example **Object** ( min and max are forbidden )
```javascript
Critiq.validate(['object'], {key:'value'}, function(err,result){})
```
Example **Array** ( min and max are forbidden )
```javascript
Critiq.validate(['array'], [1,'two',3,4,'five'], function(err,result){})
```
Example **Function** ( min and max are forbidden )
```javascript
Critiq.validate(['function'], function(){}, function(err,result){})
```
#### Multiple Params Validations
```javascript
// Example String and Number
Critiq.validate(['string','number'], '3456547', function(err,result){})
```
```javascript
// Example String and alphaNum
Critiq.validate(['string','alphaNum'], 'aBcd3456547', function(err,result){})
```
```javascript
// Example String and Number
Critiq.validate(['string','alphaber'], 'abcdEfgHij', function(err,result){})
```
**Catch the Error and Result**
```javascript
Critiq.validate(['string'], 'asdfasdf', function(err,result){

    if(err){
      console.log(err);
      return
    }
    console.log('Hooray data is valid!')
    console.log(result)

  })
```

#### Complex Validation

`PARAMETERS`
* config - (Object) containing the fields you want to validate from the data
* data - (Object) data set
* callback - (function) callback is call after validation process is done.
	##### Callback Parameters
    * error - null if no error
    * result - null if has error

Below is an example
```javascript
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
  console.log('Hooray! Everything is validated')
  console.log(result)

})

```

### Become a contributor
email me at
```
rhomnickcoloma@gmail.com
```

### ISC LICENSE (ISC)

Copyright (c) 2016, Rhomnick B. Coloma rhomnickcoloma@gmail.com

Permission to use, copy, modify, and/or distribute this software for any
with or without fee is hereby granted, provided that the above copyright
notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
