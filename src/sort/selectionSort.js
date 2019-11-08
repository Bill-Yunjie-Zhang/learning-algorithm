let numbers = [3, 1, 6, 15, 16, 4, 2, 7, 25, 27, 3]

const selectionSort = (numArray) => {
    for(ii = 0; ii < numArray.length; ii ++){
        for(jj = ii; jj < numArray.length; jj ++){
            let min = numArray[ii]
            let index = ii
            if(min > numArray[jj]){
                min = numArray[jj]
                index = jj
            }
            let tmp = numArray[ii]
            numArray[ii] = min
            numArray[index] = tmp
        }
    }
    return numArray
}

console.log(selectionSort(numbers))