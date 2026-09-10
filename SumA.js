function summ(arr){
let sum=0;
for(let i=0;i<arr.length;i++){
  sum=sum+arr[i];
}
return sum;
}
console.log(summ([1,2,3,4]));