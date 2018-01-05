

/*
fork 是以IPC　通道进行通信
其余的spawn ,exec 是以stdout,stderr,stdin 方式处理进程间交流数据

ls.stdout.on('data', (data) => {
  console.log(`输出：${data}`);
});

ls.stderr.on('data',callback);

*/ 
const cp = require('child_process');

const ep = cp.exec('ls -l');

console.log('exec pid:',ep.pid);
console.log('exec channel:', ep.channel);

const fp = cp.fork('./1.js');

console.log('fork pid:',fp.pid);
console.log('fork channel:', fp.channel);

const sp = cp.spawn('ls ', ['-lh', '/usr']);
 
sp.on('error',function(){
	
	console.log('error:',arguments);
});
console.log('spawn pid:',sp.pid);
console.log('spawn channel:', sp.channel);


