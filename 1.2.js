let compare = function (arr) {
    if (arr.length >= 2) {
        let newArr = [];
        for (let i = 0; i <= arr.length - 2; i++) {
            let firstCharPrev = arr[i][0];
            let lastCharPrev = arr[i][-1];
            let firstChar = arr[i + 1][0];
            let lastChar = arr[i + 1][-1]
            newArr.push(firstCharPrev == firstChar && lastCharPrev == lastChar)
        }
        return newArr;
    }
}

console.log(compare(["asd", "afffd", "cc", "kk"]));




/*
function compare(arr) {
    let newArr = arr.map((el, i, a,) =>
        a[i + 1] && el[0] === a[i + 1][0] && el.slice(-1) === a[i + 1].slice(-1));
    let res = newArr.slice(0, -1);
    return res;
}
*/




