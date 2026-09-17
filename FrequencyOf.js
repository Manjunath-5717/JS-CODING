// // // function frequencyF(str){
// // //   let freq={};

// // //   for(let ch of str){
// // //     if(freq[ch]){
// // //       freq[ch]++;
// // //     }else{
// // //       freq[ch]=1;
// // //     }
// // //   }
// // // return freq;
// // // }
// // // console.log(frequencyF("hello"));



// // // function freq(str,tar){
// // //   let res="";

// // //   for(let ch of str){
// // //     if(ch===' '){
// // //       res=res+tar;
// // //     }else{
// // //       res=res+ch;
// // //     }
// // //   }
// // //   return res;
// // // }
// // // console.log(freq("manju A R",'a'));

// // function countPa(str,tar){
// //   let count=0;

// //   for(let ch of str){
// //     if(ch.toLowerCase() === tar.toLowerCase()){
// //       count++;
// //     }
// //   }
// //   return count;
// // }
// // console.log(countPa("manjunath m",'m')); // conts m apperance


// function word(str){

//   let count=0;
// const words=str.split(" ");

// for(let w of words){
//   count++;
// }
//  return count;
//   }


// console.log(word("javscript is powerfull language"));


// function countS(str,tar){
//   let count=0;

//   for(let ch of str){
//    if(ch===tar){
//     count++;
//    }
//   }
//   return count;
// }
// console.log(countS("manjunathma",'m'));


function countTa(str,tar){
let count=0;

for(let ch of str){
  if(ch.toLowerCase()===tar.toLowerCase()){
    count++;
  }
}
return count;
}
console.log(countTa("manjunath a r",'A'));