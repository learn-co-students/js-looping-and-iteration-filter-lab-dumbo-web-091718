// Code your solution in this file
function findMatching(drivers, string) {
  const matchingDrivers = drivers.filter(function(driver) {
    return driver.toLowerCase() === string.toLowerCase() ;
  });
  return matchingDrivers
}

function fuzzyMatch(drivers, string) {
  const fuzzyDrivers = drivers.filter(function(driver) {
    return driver[0] === string[0];
  })
  return fuzzyDrivers
}

function matchName(drivers, string) {
  const nameDrivers = drivers.filter(function(driver) {
    return driver.name === string;
  });
  return nameDrivers
}
