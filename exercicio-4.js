function contador() {
    let i = 0;
    return function() {
        i++;
        return i;
    }
}

let contador1 = contador();
console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 3

let contador2 = contador();
console.log(contador2()); // 1
console.log(contador2()); // 2