'use strict';

var  EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();

event.on('event1',function(){
	
	console.log('this:',this);
});


setTimeout(function(){
	
	event.emit('event1');
},1000);