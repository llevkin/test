### 1. Что будет выведено в консоль и почему так?

```js
setImmediate(() => console.log(3))
setTimeout(() => console.log(2), 0);
setTimeout(() => console.log(6), 100);
console.log(1);
new Promise(resolve => resolve(5)).then(value => console.log(value));
process.nextTick(() => console.log(4));
```

### 2. Упростите приведенную ниже реализацию на сколько это возможно
```js
function func(s, a, b) {
  var match_empty = /^$/ ;
  if (s.match(match_empty)) {
    return -1;
  }
  else {
    var i = s.length - 1;
    var aIndex = -1;
    var bIndex = -1;
    while ((aIndex == -1) && (bIndex == -1) && (i >= 0)) {
      if (s.substring(i, i+1) == a)
        aIndex=i;
      if (s.substring(i, i+1) == b)
        bIndex=i;
      i--;
    }
    if (aIndex != -1) {
      if (bIndex == -1)
        return aIndex;
      else
        return Math.max(aIndex, bIndex);
    }
    else {
      if (bIndex != -1)
        return bIndex;       
      else
        return -1;
    }
  }
};
```

### 3. Что будет выведено в консоль и почему это так?
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

### 4. Расскажите про жизненный цикл приведённого ниже React-компонента: 
- За что отвечают описанные методы класса? Расскажите про каждый метод.
- Какие изменения произошли недавно в жизненном цикле и с какими методами связанны?
```js
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  state = { word: 'Hello!', hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  constructor(...args) {
    super(...args);
  }

  componentDidUpdate() {
  }

  componentWillUpdate() {
  }

  componentDidMount() {
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  shouldComponentUpdate() {
  }

  componentDidCatch() {
  }

  render() {
    return (
      <div>
        <h1>{this.state.word}</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);
```
