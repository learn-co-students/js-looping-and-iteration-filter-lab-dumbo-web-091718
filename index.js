// Code your solution in this file
function findMatching (list, name) {
  return list.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  }
)
}


function fuzzyMatch (list, partName) {
let lengthName = partName.length;
  return list.filter(function(drivername){
    return drivername.slice(0, lengthName) === partName;
  });
}

function matchName(drivers, name) {
  return drivers.filter(function(driver){
    return driver.name.toLowerCase() === name.toLowerCase();
  })
}
