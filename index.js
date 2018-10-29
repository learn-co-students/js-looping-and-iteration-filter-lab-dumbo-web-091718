// Code your solution in this file
function findMatching(drivers, string){
    return drivers.filter(function (driver){
      return driver.toLowerCase() === string.toLowerCase()
    })
}


  function fuzzyMatch(collection, partialName){
    let nameLength = partialName.length
    return collection.filter(function(drivers){
      return drivers.slice(0, nameLength) == partialName
    })
}


  function matchName(collection, name){
    return collection.filter(function(driver){
      return driver.name.toLowerCase() === name.toLowerCase()
    })
  }

// function filter (collection, attribute, value) {
//   for (const user of collection) {
//     if (user[attribute] === value) {
//       console.log(user.firstName);
//     }
//   }
// }
