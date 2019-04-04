function findMatching(drivers, string) {
  return drivers.filter(function(val){
    return val.toLowerCase()===string.toLowerCase()})
}
 function fuzzyMatch(drivers, string) {
  return drivers.filter(function(val){
    return val.slice(0,string.length)===string})
}
 function matchName(drivers, string) {
  return drivers.filter(function(val){
    return val.name===string})
}