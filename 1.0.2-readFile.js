'use strict ';


readFile();

function readFileSync(){
	var f = require('fs');
	var data = f.readFileSync('test.txt','utf-8');
	
	console.log('end js');
	console.log('data:',data);
}

function readFile(){
	
var f = require('fs');
	f.readFile('test.txt','utf-8',function (err,data){
		
		if(err){
			console.log('err:',err);
		}else {
			
			console.log('data:',data);
		}
	});
	
	console.log('end js');	
	console.log('sleep start');
	sleep(0);
	console.log('sleep end ');
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
