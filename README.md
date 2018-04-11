List of M49 regions
============
[![npm version](https://badge.fury.io/js/m49-regions.svg)](https://badge.fury.io/js/m49-regions)
[![renovate-app](https://img.shields.io/badge/renovate-app-blue.svg)](https://renovateapp.com/) 
[![Known Vulnerabilities](https://snyk.io/test/github/fabulator/m49-regions/badge.svg)](https://snyk.io/test/github/fabulator/m49-regions)
[![codecov](https://codecov.io/gh/fabulator/m49-regions/branch/master/graph/badge.svg)](https://codecov.io/gh/fabulator/m49-regions) 
[![travis](https://travis-ci.org/fabulator/m49-regions.svg?branch=master)](https://travis-ci.org/fabulator/m49-regions)

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
