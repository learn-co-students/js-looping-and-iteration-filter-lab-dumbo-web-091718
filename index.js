// Code your solution in this file
function findMatching(drivers, str){
  return drivers.filter(driver => {
    return driver.toLowerCase() === str.toLowerCase()
  })
}

function fuzzyMatch(drivers, str){
  return drivers.filter(driver => {
    return driver.slice(0, str.length) === str
  })
}

function matchName(drivers, string){
  return drivers.filter(driver => {
    return driver["name"] === string
  })
}