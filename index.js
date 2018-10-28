// Code your solution in this file
function findMatching(array, string) {
  return array.filter(function (word) { return word.toLowerCase() === string.toLowerCase(); } );
}

function fuzzyMatch(array, string) {
  reg = new RegExp("^" + string);
  return array.filter(function (word) { return word.match(reg) });
}

function matchName(array, string) {
  return array.filter(function (word) { return word.name === string; });
}
