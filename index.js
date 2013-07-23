/*

index.js - bucket sort

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

var insertionSort = require('insertion-sort');

var bucketSort = module.exports = function bucketSort (array, ascending) {
    ascending = (typeof ascending === "undefined") ? true : ascending;
    var result = new Array(array.length);
    var i, j, max = -Infinity, min = Infinity;
    for (i = 0; i < array.length; i++) {
        if (array[i] < min) min = array[i];
        if (array[i] > max) max = array[i];
        result[i] = [];
    }
    var divisor = (max - min);
    if (divisor == 0) divisor = 1;
    for (i = 0; i < array.length; i++) {
        var index = Math.floor(array.length * ((array[i] - min) / divisor));
        if (index == array.length) index--;
        result[index].push(array[i]);
    }
    for (i = 0; i < array.length; i++) {
        result[i] = insertionSort(result[i], ascending);
    }
    var response = [];
    if (ascending) {
        for (i = 0; i < array.length; i++) {
            for (j = 0; j < result[i].length; j++) {
                response.push(result[i][j]);
            }
        }
    } else {
        for (i = array.length - 1; i >= 0; i--) {
            for (j = 0; j < result[i].length; j++) {
                response.push(result[i][j]);
            }
        }
    }
    return response;
};