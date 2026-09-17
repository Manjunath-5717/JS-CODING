// function evenN(arr){
//   let res=[];

//   for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// console.log(evenN([1,2,4,6,8,4,5,7,7]));


let arr=[2,4,6,7,5,8];

function isEven(){
  const evenNo=arr.filter((item)=> item %2===0);
    return evenNo;
  
}
console.log(isEven());