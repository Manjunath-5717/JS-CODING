function duplicate(arr){
  let res=[];

  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]===arr[j] && !res.includes(arr[i])){
        res.push(arr[i]);
      }
    }
  }
  return res;
}
console.log(duplicate([3,3,4,5,6,7,8,7,8]));