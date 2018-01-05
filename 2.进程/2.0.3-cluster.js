
const cluster = require('cluster');

//fork(ipc 方式)只能在master 进程中创建子进程

if(cluster.isMaster){
    
	//监听工作：
	//online 工作进程上线监听
	cluster.on('online',(worker)=>{
		
		console.log('online ,worker.id = ',worker.id);
	});
	cluster.on('message',(worker,message,hanlder)=>{
		
		console.log('主进程监听子进程的message <- '+ message);
	});
	
	
	
	
	
	//创建工作：
	//master 创建子进程
	for(let i =0;i<1;i++){
		
	   var worker  = cluster.fork();	
	   console.log('fork-worker.process.pid(${i}):', worker.process.pid);
	   console.log('fork-worker.id:',worker.id);
	   //console.log('worker.proecess.channel($(i)):', worker.process.channel);

	}
	
	//发送消息给子进程：
	 cluster.workers[1].send('我是你 parent');
	
	//结束子进程：
	//所有子进程强制 disconnect
     setTimeout(()=>{
		cluster.disconnect(()=>{
		
		 console.log('主进程：所有的子进程强制disconnet');
	 });		 
		 
	 },2000);
		
}

//worker : 工作 ，结束
if(cluster.isWorker){
		
	console.log('cluster.worker.id(工作中...) :',cluster.worker.id);
	
	//监听子进程中的disconnect 事件
	cluster.worker.on('disconnect',()=>{
	//console.log('cluster.worker.id: '+cluster.worker.id+' disconnect ');
		
	}); 
}

//worker : 通信 
if(cluster.isWorker){
	
	cluster.worker.send('你好，我是worker'+cluster.worker.id);
	
	cluster.worker.on('message',(message,handle)=>{
		
		console.log('worker'+cluster.worker.id+' 收到父进程message <-'+message);
	});
}