const arr = ['qwert', 'mnbv', 'asdfgh'];


const returnStringLen5 = () => {



    for (i = 0; i < arr.length; i++) {

        var string = arr[i]
        if (string.length == 5) {

            return string;
        }

    }
}


    console.log(returnStringLen5(arr));



