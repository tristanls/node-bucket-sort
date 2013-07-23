/*

test.js - bucket sort test

The MIT License (MIT)

Copyright (c) 2013 Tristan Slominski

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/

"use strict";

var bucketSort = require('./index.js');

var test = module.exports = {};

test['sorting [5,2,4,6,1,3] ascending should result in [1,2,3,4,5,6]'] = function (test) {
    test.expect(1);
    test.deepEqual(bucketSort([5,2,4,6,1,3]), [1,2,3,4,5,6]);
    test.done();
};

test['sorting [5,2,2,6,1,3] ascending should result in [1,2,2,3,5,6]'] = function (test) {
    test.expect(1);
    test.deepEqual(bucketSort([5,2,2,6,1,3]), [1,2,2,3,5,6]);
    test.done();
};

test['sorting [0,0,0,0,0,1] ascending should result in [0,0,0,0,0,1]'] = function (test) {
    test.expect(1);
    test.deepEqual(bucketSort([0,0,0,0,0,1]), [0,0,0,0,0,1]);
    test.done();
};

test['sorting [0,0,0,0,0,-1] ascending should result in [-1,0,0,0,0,0]'] = function (test) {
    test.expect(1);
    test.deepEqual(bucketSort([0,0,0,0,0,-1]), [-1,0,0,0,0,0]);
    test.done();
};

test['sorting [] ascending should result in []'] = function (test) {
    test.expect(1);
    test.deepEqual(bucketSort([]), []);
    test.done();
};


test['sorting [1] ascending should result in [1]'] = function (test) {
    test.expect(1);
    test.deepEqual(bucketSort([1]), [1]);
    test.done();
};

test['sorted ascending result should find only greater or equal values while ascending'] = function (test) {
    var n = 10000;
    test.expect(n - 1);
    var array = [];
    for (var i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * n));
    }
    array = bucketSort(array);
    for (i = 0; i < array.length - 1; i++) {
        test.ok(array[i] <= array[i + 1]);
    }
    test.done();
};

test['sorting [5,2,4,6,1,3] descending should result in [6,5,4,3,2,1]'] = function (test) {
    test.expect(1);
    test.deepEqual(bucketSort([5,2,4,6,1,3], false), [6,5,4,3,2,1]);
    test.done();
};

test['sorting [5,2,2,6,1,3] descending should result in [6,5,4,2,2,1]'] = function (test) {
    test.expect(1);
    test.deepEqual(bucketSort([5,2,2,6,1,3], false), [6,5,3,2,2,1]);
    test.done();
};

test['sorting [0,0,0,0,0,1] descending should result in [1,0,0,0,0,0]'] = function (test) {
    test.expect(1);
    test.deepEqual(bucketSort([0,0,0,0,0,1], false), [1,0,0,0,0,0]);
    test.done();
};

test['sorting [0,0,0,0,0,-1] descending should result in [0,0,0,0,0,-1]'] = function (test) {
    test.expect(1);
    test.deepEqual(bucketSort([0,0,0,0,0,-1], false), [0,0,0,0,0,-1]);
    test.done();
};

test['sorting [] descending should result in []'] = function (test) {
    test.expect(1);
    test.deepEqual(bucketSort([], false), []);
    test.done();
};


test['sorting [1] descending should result in [1]'] = function (test) {
    test.expect(1);
    test.deepEqual(bucketSort([1], false), [1]);
    test.done();
};

test['sorted descending result should find only lesser or equal values while descending'] = function (test) {
    var n = 10000;
    test.expect(n - 1);
    var array = [];
    for (var i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * n));
    }
    array = bucketSort(array, false);
    for (i = 0; i < array.length - 1; i++) {
        test.ok(array[i] >= array[i + 1]);
    }
    test.done();
};