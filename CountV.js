
function countVowels(str) {

   let vow=0,cons=0,spe=0,num=0;

   for(let i=0;i<str.length;i++){
    let ch=str.charAt(i).toLowerCase();

    if(ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u'){
        vow++;
    }else if(ch>='a'  && ch<='z'){
        cons++;
    }else if(ch>='0' && ch<='9'){
        num++;
    }else{
        spe++;
    }
   
   }
    console.log("vowels "+vow);
    console.log("consonants "+ cons);
    console.log("specila charcter "+spe);
    console.log("Numbers "+ num);
}
countVowels("manju12&$%3");
