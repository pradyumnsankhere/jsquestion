  const arr=[2,556,26.11,9];

const  checkNumInArray=(arr,num)=>{
      flag=0;
    for(i=0; i<arr.length; i++){

        if(arr[i]==num){
           flag=1;
            return true;

        }

    }
    if(flag==0){
        return false;
    }


}

console.log(checkNumInArray(arr,9));