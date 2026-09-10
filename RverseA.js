function revsrseArr(arr){
  let res=[];

  for(let i=arr.length-1;i>=0;i--){
    res.push(arr[i]);
  }
  return res;
}

console.log(revsrseArr([3,4,5,6,77,99]));