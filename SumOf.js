// // // function SumOfDi(n){
// // //   let sum=0;

// // //   while(n!=0){
// // //     let digit=n%10;
// // //     sum=sum+digit;
// // //     n=Math.floor(n/10);
// // //   }
// // //   return sum;
// // // }

// // // console.log(SumOfDi(1234));// 10


// // function factorial(n){
// //   let fact=1;
// //   for(let i=1;i<=n;i++){
// //     fact=fact*i;//1,2,6,24,120
// //   }
// //   return fact;
// // }
// // console.log(factorial(5));

// // function fibb(n){
// //   let a=0;
// //   let b=1;

// //   for(let i=1;i<n;i++){
// //     console.log(a);
  
// //   let next=a+b;
// //   a=b;
// //   b=next;
// // }
// // }
// // fibb(7);

// function reverseN(n){
//   let rev=0;

//   while(n!=0){
//     let digit()=n%10;
//     rev=rev*10+digit;
//     n=Math.floor(n/10);
//   }
//   return rev;
// }
// console.log(reverseN(1234));

function reverseN(n){
    let rev=0;

    while(n!=0){
        let digit=n%10;
        rev=rev*10+digit;
        n=Math.floor(n/10);

    }
    return rev;
}
console.log(reverseN(1245));