const repeat = (str, int) => {
    while (int > 0) {
        return str.repeat(int)
    }
}

console.log(repeat("my ", 4))


const str = "hello";
console.log(str.repeat(3));

let nb = 0
while (nb < 10) {
nb = nb + 1;
console.log("We are at number", nb)
}

const  times5 = (n) => {
    let result = 0;
    let count = 0;

    while (count < 10) {
        count = count + 1;
        result = result + n;
    }
    return result;
}

console.log(times5(4))