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
