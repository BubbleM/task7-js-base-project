const _ = require('lodash');

function withUnit(num) {
  if (num === 0) {
    return 'no more bottles';
  }
  if (num === 1) {
    return '1 bottle';
  }
}
function toLyric(num) {
  let firstLine = `${_.capitalize(withUnit(num))} of beer on the wall, ${withUnit(num)} of beer.`;
  let secondLine = `Take one down and pass it around, no more bottles of beer on the wall.`;
  if (num === 0) {
    secondLine = `Go to the store and buy some more, 99 bottles of beer on the wall.`;
  }

  return firstLine + '\n' + secondLine;
}

function beersong(num){
  let lyric = '';
  if (num === 1) {
    lyric = toLyric(1) + '\n' + toLyric(0);
  }
  if (num === 0) {
    lyric = toLyric(num);
  }
  let commonLyric = num + ' bottles of beer on the wall, ' + num + ' bottles of beer.\n' +
    'Take one down and pass it around, ' + (num - 1) + ' bottles of beer on the wall.\n';

  return lyric === "" ? commonLyric : lyric;
}

module.exports = beersong;
