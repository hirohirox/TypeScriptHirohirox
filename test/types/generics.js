var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var aaa;
(function (aaa) {
    var Queue = /** @class */ (function () {
        function Queue() {
            var _this = this;
            this.data = [];
            this.push = function (item) { return _this.data.push(item); };
            this.pop = function () { return _this.data.shift(); };
        }
        return Queue;
    }());
    var queue = new Queue();
    queue.push(0);
    queue.push("1");
    console.log(queue.pop().toPrecision(1));
    // console.log(queue.pop().toPrecision(1));
})(aaa || (aaa = {}));
var bbb;
(function (bbb) {
    var QueueNumber = /** @class */ (function () {
        function QueueNumber() {
            var _this = this;
            this.data = [];
            this.push = function (item) { return _this.data.push(item); };
            this.pop = function () { return _this.data.shift(); };
        }
        return QueueNumber;
    }());
    var queue = new QueueNumber();
    queue.push(0);
    // queue.push("1"); // Error: Cannot push a string. only numbers allowd
})(bbb || (bbb = {}));
var ccc;
(function (ccc) {
    var Queue = /** @class */ (function () {
        function Queue() {
            var _this = this;
            this.data = [];
            this.push = function (item) { return _this.data.push(item); };
            this.pop = function () { return _this.data.shift(); };
        }
        return Queue;
    }());
    var queue = new Queue();
    queue.push(0);
    // queue.push("1"); // Error: cannot push a string. only number allows.
})(ccc || (ccc = {}));
var ddd;
(function (ddd) {
    var getJSON = function (config) {
        var fetchConfig = (__assign({ method: 'GET', 'Accept': 'application/json', 'Content-Type': 'application/json' }, (config.headers || {})));
        return fetch(config.url, fetchConfig).then(function (response) { return response.json(); });
    };
    function loadUsers() {
        return getJSON({ url: 'http://example.com/users' });
    }
})(ddd || (ddd = {}));
