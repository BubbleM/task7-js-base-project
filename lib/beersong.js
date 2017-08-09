function beersong(num){
  let lyric = '';
  let commonLyric = num + ' bottles of beer on the wall, ' + num + ' bottles of beer.\nTake one down and pass it around, ' + (num - 1) + ' bottles of beer on the wall.';
  if (num === 2) {
    lyric = '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.';
  }
  return lyric === '' ? commonLyric : lyric;
}

module.exports = beersong;
