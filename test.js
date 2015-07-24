"use strict";

var test = require('tap').test;
var formatPath = require('./');
var bcp47 = require('bcp47');

test('should accept PayPal simplified locales', function (t) {
    t.equal(formatPath({country: 'US', language: 'en'}), 'US/en');
    t.end();
});

test('should accept BCP47 locales', function (t) {
    t.equal(formatPath(bcp47.parse('en-US')), 'US/en');
    t.end();
});

test('bogus in, bogus out', function (t) {
    t.equal(formatPath({bogus: 'totally'}), '');
    t.end();
});
