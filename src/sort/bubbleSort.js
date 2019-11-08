let numbers = [3, 1, 6, 15, 16, 4, 2, 7, 25, 27, 3]

const bubbleSort = (numArray) => {
    for(ii = 0; ii < numArray.length + 1; ii++){
        for(jj = 0; jj < numArray.length - 1; jj++){
            let n1 = numArray[jj]
            let n2 = numArray[jj + 1]
            if (n1 > n2){
                numArray[jj] = n2
                numArray[jj + 1] = n1
            }
        }
    }
    return numArray
}

console.log(bubbleSort(numbers))