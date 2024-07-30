function fibo(n){
    if(n <= 1 ){
        return n
    }
    else{
        return fibo(n-1)+fibo(n-1)
    }

}
console.log(fibo(7))