List of M49 regions
============
![codecov](https://img.shields.io/bower/v/m49-regions.svg) [![codecov](https://img.shields.io/npm/v/m49-regions.svg)](https://www.npmjs.com/package/m49-regions) [![codecov](https://travis-ci.org/fabulator/m49-regions.svg?branch=master)](https://travis-ci.org/fabulator/m49-regions)

This library constains list of M49 regions based on United Nations standard - https://unstats.un.org/unsd/methodology/m49/

You can use package as npm module. Just install it:

```sh
npm install m49-regions --save
```

and use it in you project:

```js
var m49Regions = require('m49-regions');
console.log(m49Regions);
```

You can also install it as bower package:
```sh
bower install m49-regions
```

and use is very similar as in npm
```js
console.log(M49Regions);
```

It can be also used with RequireJS, CommonJS, Browserify or Webpack.

## Format
Each region have two mandatory properties (name and code) and one optional (sub - for subregions). Json is in hearchial structure:

```json
{
    "code": "001",
    "name": "World",
    "sub": [ {
         "code": "009",
         "name": "Europe",
         "sub": [ ... list of sub-regions ... ]
       }
       ...
    ]
}
```
