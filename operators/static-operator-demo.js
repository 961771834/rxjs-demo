

// 静态操作符，它们是直接附加到 Observable 类上的,静态操作符在内部不使用 this 关键字，而是完全依赖于它的参数。

// 接收非 Observable 参数，比如数字，然后创建一个新的 Observable ，而不是将一个输入 Observable 转换为输出 Observable 。
var Rx = require('rxjs/Rx');

// 这里的interval就是静态操作符。

var observable = Rx.Observable.interval(1000 /* 毫秒数 */);
