// 操作符本质上是一个纯函数 (pure function)，它接收一个 Observable 作为输入，并生成一个新的 Observable 作为输出。订阅输出 Observalbe 同样会订阅输入 Observable 。
// 在下面的示例中，我们创建一个自定义操作符函数，它将从输入 Observable 接收的每个值都乘以10：

var Rx = require('rxjs/Rx');

function multiplyByTen(input) {
    var output = Rx.Observable.create(function subscribe(observer) {
      input.subscribe({
        next: (v) => observer.next(10 * v),
        error: (err) => observer.error(err),
        complete: () => observer.complete()
      });
    });
    return output;
  }
  
  var input = Rx.Observable.from([1, 2, 3, 4]);


  // multiplyByTen 自定义操作符
  var output = multiplyByTen(input);
  output.subscribe(x => console.log(x));