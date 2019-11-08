let numbers = [3, 1, 6, 15, 16, 4, 2, 7, 25, 27, 3]

const merge = (left, right) => {
    let sorted = [];
    while(left.length > 0 && right.length > 0){
        if (left[0] <= right[0]) {
           sorted.push(left[0])
           left = left.slice(1)
        } else {
           sorted.push(right[0])
           right = right.slice(1)
        }
    }
    while(left.length > 0){
        sorted.push(left.shift())
    }
    while(right.length > 0){
        sorted.push(right.shift())
    }
    return sorted;
}

const mergeSort = (numArray) => {
    if (numArray.length < 2) {
        return numArray
    } else {
        var midpoint = Math.floor((numArray.length / 2))
        var left = numArray.slice(0, midpoint)
        var right = numArray.slice(midpoint, numArray.length)
        return merge(mergeSort(left), mergeSort(right))
    }
}

console.log(mergeSort(numbers))