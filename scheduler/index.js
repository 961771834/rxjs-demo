// - 调度器控制着何时启动 subscription 和何时发送通知

var Rx = require('rxjs/Rx');


//   got value... 在 just after subscribe 之后才发送

//   observeOn(Rx.Scheduler.async) 在 Observable.create 和最终的观察者之间引入了一个代理观察者
var observable = Rx.Observable.create(function (proxyObserver) {
    proxyObserver.next(1);
    proxyObserver.next(2);
    proxyObserver.next(3);
    proxyObserver.complete();
  })
  .observeOn(Rx.Scheduler.async);
  
  var finalObserver = {
    next: x => console.log('got value ' + x),
    error: err => console.error('something wrong occurred: ' + err),
    complete: () => console.log('done'),
  };
  
  console.log('just before subscribe');
  observable.subscribe(finalObserver);
  console.log('just after subscribe');