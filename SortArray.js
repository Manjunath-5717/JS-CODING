// //sort array without sort

// function sortArr(arr){

//   const sortArray=arr.sort();
//   return sortArray;
// }

// console.log(sortArr([3,5,6,7,8,1]));

// function sortArr(arr){
//   const arraysort=arr.sort((a,b)=> b-a);
//   return arraysort;
// }
// console.log(sortArr([10,25,5]));


function sortedArr(arr){

  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
  }
  return arr;

}
console.log(sortedArr([23,45,44,34,56]))