"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var beersong = require("../lib/beersong.js");

describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("add common lyric while num between 3 ~ 99", function(){
        let num = 99;
        let lyric = beersong(num);
        let expect_string = '99 bottles of beer on the wall, 99 bottles of beer.\n' +
            'Take one down and pass it around, 98 bottles of beer on the wall.\n';
        
        expect(lyric).to.equal(expect_string);
    });

    it("add lyric while num equal 2", function(){
        let num = 2;
        let lyric = beersong(num);
        let expect_string = '2 bottles of beer on the wall, 2 bottles of beer.\n' +
            'Take one down and pass it around, 1 bottle of beer on the wall.\n';

        expect(lyric).to.equal(expect_string);
    });

    it("add lyric while num equal 1", function(){
        let num = 1;
        let lyric = beersong(num);
        let expect_string = '1 bottle of beer on the wall, 1 bottle of beer.\n' +
            'Take one down and pass it around, no more bottles of beer on the wall.\n' +
            'No more bottles of beer on the wall, no more bottles of beer.\n' +
            'Go to the store and buy some more, 99 bottles of beer on the wall.';

        expect(lyric).to.equal(expect_string);
    });
});