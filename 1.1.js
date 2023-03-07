let deepClone = function (arg) {
  if (arg === null) return null;
  let newObj = Object.assign({}, arg);
  for (key in newObj) {
    for (let i = 0; i < key.length; i++) {
      if (typeof arg[i] === 'object') {
        newObj[i] = deepClone(arg[i])
      } else {
        newObj[i] = arg[i];
      }
    }
  }
  if (Array.isArray(arg)) {
    newObj.length = arg.length;
    return Array.from(newObj);
  }
  return newObj;
};

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};
let user2 = deepClone(user);

console.log(user == user2);

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