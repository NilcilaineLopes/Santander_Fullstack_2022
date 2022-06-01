function filtraPares(arr) {
    return arr.filter(callback)
}
function callback(item){
    return item % 2 === 0;
}

const meuArray = [1, 23, 55, 67, 30, 26, 2, 4, 1];

console.log(filtraPares(meuArray));