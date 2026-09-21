function isArmStrong(n){
  let ori=n;
  let sum=0;
  let digits=String(n).length;

  while(n!=0){
    let digit=n%10;
    sum=sum+Math.pow(digit, digits);
    n=Math.floor(n/10);
  }
  return ori===sum;
}
console.log(isArmStrong(153));

function isAramStrong(num){
  let original=num;
  let sum=0;
  let digits=String(num).length;

while(num!=0){
  let digit=num%10;
  sum=sum+Math.pow(digit,digits);
  n=Math.floor(num/10);
}
  return original===sum;
}
console.log(isAramStrong(153));
