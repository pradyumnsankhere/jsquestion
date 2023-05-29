 const arr=[2,6,7,9,2,3,6];


const removeEvenNumber=(arr)=>{
    let newArray = [];
    
    for(let i = 0; i < arr.length; i++){

         if(arr[i] % 2 !== 0) newArray.push(arr[i]);
        
     }

     return newArray;
      
}
  
console.log(removeEvenNumber(arr));