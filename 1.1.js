function deepClone(obj) {
    if (typeof obj !== 'object') {
      return obj;
    }
    let newObj = null;
    if (Array.isArray(obj)) {
      newObj = [...obj]
    } else {
       newObj = {...obj}
    }
    for(key in newObj) {
       newObj[key] = deepClone(newObj[key])
    }
  return newObj;
}

/*
function cloneDeep(obj) {   
    if (obj === null) return null;
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(key => 
        (clone[key] = typeof obj[key] ==='object'  ? cloneDeep(obj[key]) : obj[key]));
    if (Array.isArray(obj)) {
        clone.length = obj.length;
        return Array.from(clone);
    } 
    return clone;
    }
*/
