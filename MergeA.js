function merge(arr1,arr2){
  return [...arr1,...arr2]; //return [...new Set([...arr1,...arr2])];
}
console.log(merge([2,3,4,5,6],[4,5,6,7]));