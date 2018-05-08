var Rx = require("rxjs");

/* evetntEmitter  */
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
    console.log('some_event 事件触发'); 
}); 
setTimeout(function() { 
    event.emit('some_event'); 
}, 3000);


/* 泛化 */

function foo(){
  console.log("hello");
  return 23;
}

const x = foo.call();

console.log(x);

/* 利用Observables重写上面代码 */

var leon = Rx.Observable.create((observer)=>{
  console.log("hello");
  observer.next(42);
  observer.next(34);
})


leon.subscribe((x)=>{
  console.log(x);
})

leon.subscribe((y)=>{
  console.log(y)
})

// func.call() 意思是 "同步地给我一个值", 函数只能返回一个值。
// observable.subscribe() 意思是 "给我任意数量的值，无论是同步还是异步"