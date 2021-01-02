export namespace asdfasdfasdfasdflkjasdflkjasdflkjasdflkjasdf {
}

namespace parameter {
  var sampleVariable: { bar: number }
  function foo(sampleParameter: { bar: number }) { }  
}

namespace returnType{
  interface Foo{
    foo: string;
  }
  function foo(sample: Foo) {
    return sample;
  }
}

namespace inferred {
  interface Foo {
    foo: string;
  }

  function foo(sample: Foo) {
    return sample;
  }
}

namespace misspelled{
  function foo() {
    return { fou: 'John  Doe' };
  }
  // sendAsJSON(foo()); // Cannot find name 'sendAsJSON'.ts(2304)
}

namespace optional {
  function foo(bar: number, bas?: string): void{
    // ...
  }

  foo(123);
  foo(123, 'hello');
}

namespace optionalDefault {
  function foo(bar: number, bas: string = 'world') {
    console.log(bar, bas);
  }
  foo(123);           // 123, world
  foo(123, 'hello');  // 123, hello
}

namespace overloads {
  export function padding(a: number, b?: number, c?: number, d?: any) {
    if (b === undefined && c === undefined && d === undefined) {
      b = c = d = a;
    } else if (c === undefined && d === undefined) {
      c = a;
      d = b;
    }
    return {
      top: a,
      right: b,
      bottom: c,
      left: d
    };
  }
}

