const isPositive = (num) => {
    if (num <= 0) {
        return false;
    }
    return true;
}
const abs = (num) => {
    if (num < 0){
        return -num;
    }
    return num;
}

console.log(!isPositive(0))