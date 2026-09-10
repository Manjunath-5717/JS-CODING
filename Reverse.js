function reverse(str){

  let res="";
  for(let i=str.length;i>=0;i--){
    res=res+str.charAt(i);
  }
  return res;
}
console.log(reverse("manju"));