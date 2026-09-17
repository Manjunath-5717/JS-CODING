function tar(arr){

  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j]===30){
        return{i,j};
      }
    }
  }

}
console.log(tar([3,3,5,10,4,20]));