### 1. Что будет выведено в консоль и почему так?

```js
setImmediate(() => console.log(3))
setTimeout(() => console.log(6), 100);
console.log(1);
new Promise(resolve => resolve(5)).then(value => console.log(value));
```

### 2. Что будет выведено в консоль и почему это так?
```js
class A {
  test = 1;
  fn() {
    console.log(this.test);
  }
}

class B {
  test = 2;
  call(callback) {
    callback();
  }
}

const a = new A();
const b = new B();
b.call(a.fn);
```
