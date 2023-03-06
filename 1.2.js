
function compare (arr) {
    let newArr = arr.map((el,i,a,) => 
        a[i+1] && el[0] === a[i+1][0] && el.slice(-1) === a[i+1].slice(-1));
    let res = newArr.slice(0,-1);
    return res;
}


console.log(compare(["asd", "afffd", "cc", "kk"]));

/* 
function compare (arr) {
    return arr.map((el,i,a) => a[i+1] && el[0] === a[i+1][0] && el.slice(-1) === a[i+1].slice(-1)).slice(0,-1);
}


console.log(compare(["asd", "afffd", "cc", "kk"]));
*/

