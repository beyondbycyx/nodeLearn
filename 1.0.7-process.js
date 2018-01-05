 

 
 console.log('process.pid:',process.pid);
 console.log('process.channel:',process.channel);
 //只有在IPC 通道的子进程中可用
 //process.send('event1','I am process');
 
 process.on('message',function(arg1){
	 
	 console.log('arg1:',arg1);
 });