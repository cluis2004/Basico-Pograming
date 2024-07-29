
let vector = []
function fibo(n){
    if(n <= 1 ){
        return n
    }
    if(vector[n] != undefined){
        return vector[n]
    }
    resultado = fibo(n-1) + fibo(n-1)
    vector[n] = resultado
    return resultado

}

for(let i = 0; i<=100;i++){
    console.log(`${i}: ${fibo(i)} `)
}
console.log(fibo(200))
