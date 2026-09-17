// function removeD(arr){
//   return[...new Set(arr)];
// }
// console.log(removeD([1,2,3,3,4,5,5,]));


// function duplicateD(arr){
//   let res=[];
//   for(let num of arr){
//     if(!res.includes(num)){
//       res.push(num);
//     }
//   }
//   return res;
// }
// console.log(duplicateD([2,3,4,5,5,4,6,7,9,9]));

// function dupl(arr){
//   return [...new Set(arr)];
// }
// console.log(dupl([2,3,4,5,5,4,68,7,7]));

// function indicies(arr){
  
//   for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[i]+arr[j]===35){
//         return {i,j};
//       }
//     }
//   }
// }
// console.log(indicies([10,5,25,20]));

function dupl(arr){
  let res=[];
  
  for(let num of arr){
    if(!res.includes(num)){
      res.push(num);
    }
  
   

}return res;
}
console.log(dupl([2,4,5,5,6,6,8,9]));