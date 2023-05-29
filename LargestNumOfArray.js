
    arr=[1,2,4,5,6];

    const  LargestNumOfArray=(arr)=>{
      
        const max = arr.reduce((a, b) => Math.max(a, b));

   return max


    }

    console.log(LargestNumOfArray(arr));