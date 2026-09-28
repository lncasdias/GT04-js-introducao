for(let i = 0; i <= 10; i++){
    for (let p = 0; p <=10; p++){
        console.log(`${p} x ${i} = ${p*i}`);
    }
    console.log("----")
}

let total = 0;
for(let i = 0; i <= 100; i++){
    total += 1;
}
console.log(total);

for(let i = 0; i <= 50; i++){
    i % 2 == 0 && console.log(i)
}