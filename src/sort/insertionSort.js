let numbers = [3, 1, 6, 15, 16, 4, 2, 7, 25, 27, 3]
const insertionSort = (numArrray) => {
    for(ii = 0; ii < numArrray.length -1; ii  ++){
        let n1 = numArrray[ii]
        let n2 = numArrray[ii + 1]
        if(n1 > n2){
            numArrray[ii] = n2
            numArrray[ii + 1] = n1
            for(jj = ii + 1; jj > 0; jj --){
                let n3 = numArrray[jj - 1]
                let n4 = numArrray[jj]
                if(n3 > n4){
                    numArrray[jj - 1] = n4
                    numArrray[jj] = n3
                }
            }
        }
    }
    return numArrray
}
console.log(insertionSort(numbers))