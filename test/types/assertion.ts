export var asdf = 123;

module porting {
  var foo = {};
  // foo.bar = 123; // Property 'bar' does not exist on type '{}'.
  // foo.bas = 'hello'; // Property 'bas' does not exist on type '{}'.
}

module assert {
  interface Foo {
    bar: number;
    bas: string;
  }
  var foo = {} as Foo;
  foo.bar = 123;
  foo.bas = 'hello';
}

module sdfsdfsdf {
  var foo: any;
  var bar = <string>foo;
}

namespace doubleAssertion {
  function handler1(event: Event) {
    let mouseEvent = event as MouseEvent;
  }
  function handler2(event: Event) {
    // Conversion of type 'Event' to type 'HTMLElement' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
    // Type 'Event' is missing the following properties from type 'HTMLElement': accessKey, accessKeyLabel, autocapitalize, dir, and 234 more.
    // let element = event as HTMLElement;
  }
  function handler(event: Event) {
    let element = event as any as HTMLElement;
  }
}