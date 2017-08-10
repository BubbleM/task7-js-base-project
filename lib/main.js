let beersong = require('./beersong');

function main(){
  let lyrics = '';
  for (let i = 99; i >= 0; i--){
    lyrics += beersong(i);
  }
  return lyrics;
}

module.exports = main;

