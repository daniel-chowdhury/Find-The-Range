
let arr = [4, 55, 56, 2, 23, 88, 5];

for (i = 0; i < arr.length; i++) {
    let y = i + 1;
    for (j = y; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
        };
    };
};

console.log(arr[0]);
console.log(arr[arr.length - 1]);