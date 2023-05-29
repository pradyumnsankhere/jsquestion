const arr=[1,1,2,43,54,67,54];


const removedup=(arr)=>{

   return [...new Set(arr) ];   // Set stored only nuique value

}

console.log(removedup(arr))