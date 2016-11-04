# Critiq
Critiq is a simple parameter validator useful for API building.

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
#### Sample Data
```javascript
var payload = {

  email:'rhomnickcoloma@gmail.com',
  username:'user123',
  accountNumber: '4239937392747293',
  address:'Some Address'

}
```
#### Configuration
Indicate the fields to validate -- Fields should be in the data object
```javascript
var config = {

  email:['email','min-5','max-25'],
  username:['alphaNum','min-5','max-15'],
  accountNumber: ['number','max-16','min-16']

}
```
#### Validate Data
`PARAMETERS`
* config - (Object) containing the fields you want to validate from the data
* data - (Object) data set
* callback - (function) callback is call after validation process is done.
	##### Callback Parameters
    * error - null if no error
    * result - null if has error

Below is an example
```javascript
Critiq.validate(config, payload, function(err,result){

  if(err){
    console.log(err);
    return
  }
  console.log('result')
  console.log(result)

})

```
### Todos
* Datatype validation
* Nested validation
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
