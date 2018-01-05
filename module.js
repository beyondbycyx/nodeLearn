//module.js 


var name = 'module.js';
var obj = {age:1};

var path ;

exports.name = name;
exports.obj = obj;

exports.printLocalObj = function (){
	
	console.log('local obj-age:',obj.age);
};

exports.printExpObj = function (){
	
	console.log('ExpObj-age:',exports.obj.age);
};
exports.setObj = function (o){
	
	this.obj =  o;
	
};

exports.setObjAge  = function(age){
	
	this.obj.age = age;
};


exports.setPath =function (p){
	
	path = p;
};

exports.printPath = function (){
	
	console.log('path:',path);
};


exports.setName = function (n){
	
	this.name = n;
	
	return exports.name;
};

exports.printLocalName = function (){
	
	console.log('local name:',name);
};
