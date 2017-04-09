const request = require('request');

request('http://artemij.com').pipe(process.stdout);
