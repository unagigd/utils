const original = {
  1: true,
  2: {
    21: true,
    22: {
      31: true,
      32: {
        41: true,
      },
    },
  },
};


function togglePathValue(path, obj) {
  if (!path.length) return typeof obj === 'object' ? (Object.keys(obj).length ? false : true) : !obj;
  
  const key = path[0];
  const copy = {
    ...obj,
    [key]: togglePathValue(path.slice(1), obj[key] !== undefined ? obj[key] : {}),
     
    //[key]: (typeof obj[key] === 'object') ? { ...obj[key], ...togglePathValue(path.slice(1), obj[key]) } : !obj[key], 
  };
    
  console.log('copy', copy);  
  return copy;
}
const test = togglePathValue([2], original);

console.log(JSON.stringify(togglePathValue([2, 1], test)));
console.log(JSON.stringify(test));
console.log('---------------------');
