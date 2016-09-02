function pushOrMakeArray(map, fieldName, val) {
  var array = map[fieldName] || [];
  array.push(val);
  map[fieldName] = array;
  return map
}

function setOrMakeObj(map, fieldName, key, val) {
  var obj = map[fieldName] || {};
  obj[key] = val;
  map[fieldName] = obj;
  return map
}

module.exports = {
  pushOrMakeArray: pushOrMakeArray,
  setOrMakeObj: setOrMakeObj
}