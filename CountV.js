function countVowels(str){
let vow=0,cons=0;
for(let i=0;i<str.length;i++){
  let ch=str[i].toLowerCase();

  if(ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u'){
  vow++;
  }else{
    cons++;
  }
}
console.log("vowels " + vow);
console.log("consonstnst "+cons);
}
countVowels("manju");