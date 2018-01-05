

var m = require('./module');

console.log(m.name);

var en = m.setName('hugo');
console.log(m.name);

m.printLocalName();

m.printPath();
m.setPath('node\\');
m.printPath();

console.log('------- local obj and exports obj');
m.printLocalObj();
m.printExpObj();

m.setObj({age:20});
m.printLocalObj();
m.printExpObj();
