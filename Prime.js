//Largest of three numbers

// function largest(a,b,c){
//   if(a>b && a>c){
//     return a;
//   }else if(b>a && b>c){
//     return b;
//   }
//   return c;
// }
// console.log(largest(10,15,30));

// let a=10;
// let b=20;
// let c=25;

// if(a>b && a>c){
//   console.log(a);
// }else if(b>a && b>c){
//   console.log(b);
// }else{
//   console.log(c);
// }

function sumA(arr){
  let sum=0;

  for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];

  }
  return sum/arr.length;
}

console.log(sumA([10,20,30,40]));//100