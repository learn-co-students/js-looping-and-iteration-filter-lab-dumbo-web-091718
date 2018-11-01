function findMatching(drivers, string) {
  let matchingDrivers  = drivers.filter(function functionName (driver) {
    return driver === string || driver.toLowerCase() === string.toLowerCase()

  })
  return matchingDrivers
}

function fuzzyMatch(drivers, string) {
  let nameClips;

  let matchingDrivers = drivers.filter(function functionName (driver) {
    nameClips = driver.slice(0, string.length);

    return nameClips === string
  })
  return matchingDrivers
}

function matchName(drivers, string) {

  let foundDrivers = drivers.filter(function functionName (driverObj) {
    return string === driverObj.name
  })

  return foundDrivers

}
