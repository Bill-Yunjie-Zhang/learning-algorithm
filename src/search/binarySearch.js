let numbers = [1, 2, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 15, 16, 17]

const binarySearch = (numArray, num) => {
    let index = Math.floor((numArray.length) / 2)
    while(index >= 0){
        if(num === numArray[index]){
            return "The index of the number's first occurence is " + index
        }else if(num < numArray[index]){
            index = Math.floor(index / 2)
        }else{
            index += Math.floor((numArray.length - index) / 2)
        }
    }
    return "The number is not included"
}

console.log(binarySearch(numbers, 15))