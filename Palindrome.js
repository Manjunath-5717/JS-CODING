function pali(str){
  let res="";
  for(let i=str.length-1;i>=0;i--){
    res=res+str.charAt(i);
  }
  return res;
}
console.log(pali("manju"));