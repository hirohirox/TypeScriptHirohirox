"use strict";
exports.__esModule = true;
exports.asdf = void 0;
exports.asdf = 123;
var porting;
(function (porting) {
    var foo = {};
    // foo.bar = 123; // Property 'bar' does not exist on type '{}'.
    // foo.bas = 'hello'; // Property 'bas' does not exist on type '{}'.
})(porting || (porting = {}));
var assert;
(function (assert) {
    var foo = {};
    foo.bar = 123;
    foo.bas = 'hello';
})(assert || (assert = {}));
var sdfsdfsdf;
(function (sdfsdfsdf) {
    var foo;
    var bar = foo;
})(sdfsdfsdf || (sdfsdfsdf = {}));
var doubleAssertion;
(function (doubleAssertion) {
    function handler1(event) {
        var mouseEvent = event;
    }
    function handler2(event) {
        // Conversion of type 'Event' to type 'HTMLElement' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
        // Type 'Event' is missing the following properties from type 'HTMLElement': accessKey, accessKeyLabel, autocapitalize, dir, and 234 more.
        // let element = event as HTMLElement;
    }
    function handler(event) {
        var element = event;
    }
})(doubleAssertion || (doubleAssertion = {}));
