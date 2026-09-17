function findMiss(arr,n){

  let expectedSum=n *(n+1)/2;

  let actualSum=0;

  for(let i=0;i<arr.length;i++){
    actualSum=actualSum+arr[i];
  }
  return expectedSum-actualSum;

}

console.log(findMiss([1,3,4,5,6],6));