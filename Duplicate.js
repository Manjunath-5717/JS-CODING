// function removeD(arr){
//   return[...new Set(arr)];
// }
// console.log(removeD([1,2,3,3,4,5,5,]));


function removeD(arr){
  let res=[];

  for(let num of arr){
    if(!res.includes(num)){
      res.push(num);
    }
  }
  return res;
}
console.log(removeD([2,2,3,4,4,5,6,6]));