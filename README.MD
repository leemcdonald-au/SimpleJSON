## SimpleJSON
A quick method to handle JSON quick and easy.

#### Install
Nomral NPM Installation.
> npm install @leemcdonald-au/simplejson

#### Usage
```javascript
// Import from NPM.
import SimpleJSON from '@leemcdonald-au/simplerequest'

// Create some test data.
const obj   = { "a": "b", "c": "d" }
const text  = JSON.stringify(obj)

// Send into the JSON class.
const test1 = new SimpleJSON(obj)
const test2 = new SimpleJSON(text)

// Output the results.
console.log(test1.string, test1.object)
console.log(test2.string, test2.object)
```

#### Changelog
- 1.0.0
    - Release

##### Support
- RVN: RPzCvWdmgqPTBA5qMQFuRPfNoJmvPnVzw8
- ARK: Aeh9tR1zjE34hBrYfSD1EMfL1cxpkaVJKb
- ETH: 0xd9979f482da58b4432d0f52eb456f7dd1f4897e6
- BTC: 1HzR3Vyu231E8SsGLUbNYSb92bn6MGLEaV