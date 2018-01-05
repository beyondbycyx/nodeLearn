const  fs = require('fs');

//console.log('require.main:', require.main);
//console.log('module:',module);
//console.log('require.main.filename:',__filename);

//console.log('fs:',fs);

//console.log('__dirname:',__dirname);

const hugo = require('./hugo-module');

console.log('require:',require);
console.log('exports:',exports);
console.log('module:',module);
console.log('hugo-module:',hugo);
 