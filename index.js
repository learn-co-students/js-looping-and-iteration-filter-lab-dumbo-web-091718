// Code your solution in this file
function findMatching(array, string) {
  let newArr = [];
  for (let i=0; i < array.length; i++) {
    if (array[i].toLowerCase() === string.toLowerCase()) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

function fuzzyMatch(array, string) {
  let newArr = [];
  for (let i=0; i < array.length; i++) {
    if (array[i].startsWith(string)) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

function matchName(array, string) {
  let newArr = [];
  for (let el of array) {
    if (el.name.toLowerCase() === string.toLowerCase()) {
      newArr.push(el);
    }
  }
  return newArr;
}
