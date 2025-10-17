let arr = [3, 6, 4, 9, 1, 2];
console.log(`Before Sorting: ${arr}`);
InsertionSort(arr);
console.log(`After Sorting: ${arr}`);
function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1 //Index of last element of sorted part
        let key = arr[i] //First value of unsorted part
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}