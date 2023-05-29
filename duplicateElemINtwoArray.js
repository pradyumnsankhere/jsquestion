const arr1 = [1, 3, 5, 7, 9];
    let arr2 = [2, 3, 4, 5, 6, 9];
  

    const duplicateElemt=(arr1,arr2)=>{
    let newArray=[];
         
    for (let i = 0; i < arr1.length; i++) {
               for (let j = 0; j < arr2.length; j++) {
                    if (arr1[i] === arr2[j]) {
                        newArray.push(arr1[i]);
                   }
               }
            }
            return newArray;


    }

    console.log(duplicateElemt(arr1,arr2));