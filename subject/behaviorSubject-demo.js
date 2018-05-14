var Rx = require("rxjs");

var subject = new Rx.BehaviorSubject(0); // 0是初始值

// BehaviorSubject，它有一个“当前值”的概念
subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});

// 这里订阅时仍会有初始值 0；

subject.next(1);


subject.next(2);

subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});
//   这里订阅仍会保留值 observerB: 2

subject.next(3);



// observerA: 0
// observerA: 1
// observerA: 2
// observerB: 2
// observerA: 3
// observerB: 3