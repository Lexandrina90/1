let deepClone = function (value) {
  if (!value || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(deepClone);
  }

  const clonedObject = {};
  Object.entries(value).forEach(([key, fieldValue]) => {
    clonedObject[key] = deepClone(fieldValue);
  });

  return clonedObject;
}
let o = [1, 2, 3, { a: 'a', b: 123, c: 321 }];
let o1 = deepClone(o);
console.log(o == o1);
console.log(o1);

/*
if (Array.isArray(arg)) {
    return arg.map((item) => {
      return deepClone(item)
    })
*/




/*
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
*/

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

/*
let deepClone = function (arg) {
  if (arg != null || typeof arg !== 'object') {
    return arg;
  }
  if (Array.isArray(arg)) {
    return arg.map((item) => {
      return deepClone(item)
    })
  } else {
    let newObj = Object.assign({}, arg);
    Object.keys(newObj).forEach(key => 
        (newObj[key] = typeof obj[key] ==='object'  ? cloneDeep(arg[key]) : arg[key]));
    return newObj
  }
};
*/