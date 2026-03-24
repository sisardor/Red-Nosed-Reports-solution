const data = [
    [7, 6, 4, 2, 1],
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5],
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9],
    [1, 1, 3, 5, 6],
];

//console.log(data)

const isSafeReport = (arr) => {
    const firstResult = arr[0]-arr[1] > 0;
    for(let i = 0, len = arr.length - 1; i < len; i++) {
        const res = arr[i]-arr[i+1] > 0;
        if (firstResult === res && Math.abs(arr[i]-arr[i+1]) >= 1 && Math.abs(arr[i]-arr[i+1]) <= 3) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};



for(let i = 0, len = data.length; i < len; i++) {
    const isSafe = isSafeReport(data[i]);
    const res = isSafe ? "Safe" : "Unsafe"
    console.log("#" + i + " " + res);
}
