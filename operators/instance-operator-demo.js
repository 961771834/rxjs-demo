
// 通常提到操作符时，我们指的是实例操作符，它是 Observable 实例上的方法
var Rx = require('rxjs/Rx');


Rx.Observable.prototype.multiplyByTen = function multiplyByTen() {

    //  这里的 this 指构造出来的 Observable
    var input = this;
    return Rx.Observable.create(function subscribe(observer) {
      input.subscribe({
        next: (v) => observer.next(10 * v),
        error: (err) => observer.error(err),
        complete: () => observer.complete()
      });
    });
  }


  var observable = Rx.Observable.from([1, 2, 3, 4]).multiplyByTen();

observable.subscribe(x => console.log(x));
