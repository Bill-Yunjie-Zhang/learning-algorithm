let numbers = [1, 2, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 15, 16, 17]

const interpolationSearch = (numArray, num) => {
    let low = 0
    let high = numArray.length - 1
    let guessedPosition, ratio
    while(low <= high && num >= numArray[low] && num <= numArray[high]){
        ratio = (num - numArray[low]) / (numArray[high] - numArray[low])
        guessedPosition = low + Math.floor((high - low) * ratio)
        if (numArray[guessedPosition] == num){
          return guessedPosition
        }else if (numArray[guessedPosition] < num){
          low = guessedPosition + 1
        } else {
          high = guessedPosition - 1
        }
    }
    return -1
}

console.log(interpolationSearch(numbers, 10))