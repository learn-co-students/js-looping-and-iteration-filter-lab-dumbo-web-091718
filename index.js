// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter((driver) => {
    return driver.toLowerCase() == name.toLowerCase()
  })
}
// startsWith() Method
function fuzzyMatch(drivers, name) {
  return drivers.filter((driver) =>  driver.startsWith(name));
}
 // Accesses the data structure to check if name matches
function matchName(drivers, name) {
  return drivers.filter((driver) => {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}

// fuzzyMatch()
// returns a driver if beginning provided letters match ‣
// ReferenceError: fuzzyMatch is not defined
//     at Context.<anonymous> (test/indexTest.js:35:7)
// does not return drivers if only middle or ending letters match ‣
// ReferenceError: fuzzyMatch is not defined
//     at Context.<anonymous> (test/indexTest.js:39:7)
// does not return drivers if only middle or ending letters match ‣
// ReferenceError: fuzzyMatch is not defined
//     at Context.<anonymous> (test/indexTest.js:43:7)
// matchName()
// accesses the data structure to check if name matches
 // });
 
// https://github.com/learn-co-students/js-looping-and-iteration-filter-lab-dumbo-web-091718
