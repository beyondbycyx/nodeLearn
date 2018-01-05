'use strict';

var  EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();

event.on('event1',function(){
	
	console.log('this:',this);
});

//timer，在 i/o 事件循环结束后执行
/*
setImmediate(function(arg1){
	
	console.log('setI arg1:',arg1);
},'I am arg1');

setTimeout(function (arg1){
	
	console.log('setT arg1:',arg1);
},0,'I am arg1');


*/

var to = setInterval(function (arg1){
	
	console.log('setI arg1:',arg1);
},0,'I am arg1');

setTimeout(function(){
	clearInterval(to);
},20);



event.emit('event1');
event.emit('event1');