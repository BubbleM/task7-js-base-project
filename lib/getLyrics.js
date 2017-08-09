"use strict";

var beersong = require("../lib/beersong.js");

function getLyrics(){
  let lyrics = '';
  for (let i = 99; i > 0; i--){
    lyrics += beersong(i);
  }
  return lyrics;
}
console.log(getLyrics());
module.exports = getLyrics;
