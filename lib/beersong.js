/**
 * Created by bubble on 17-8-10.
 */
function beersong(num){
  let lyric = '';
  if (num === 2) {
    lyric = '2 bottles of beer on the wall, 2 bottles of beer.\n' +
      'Take one down and pass it around, 1 bottle of beer on the wall.\n';
  }
  if (num === 1) {
    lyric = '1 bottle of beer on the wall, 1 bottle of beer.\n' +
      'Take one down and pass it around, no more bottles of beer on the wall.\n';
  }
  if (num === 0) {
    lyric = 'No more bottles of beer on the wall, no more bottles of beer.\n' +
      'Go to the store and buy some more, 99 bottles of beer on the wall.';
  }
  let commonLyric = num + ' bottles of beer on the wall, ' + num + ' bottles of beer.\n' +
    'Take one down and pass it around, ' + (num - 1) + ' bottles of beer on the wall.\n';
  return lyric === "" ? commonLyric : lyric;
}

module.exports = beersong;
