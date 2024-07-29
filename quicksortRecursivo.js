let vector = []
let tamanio = parseFloat(prompt("ingrese la longitud"))
for(let i = 0;i<tamanio;i++){
    let numero = parseFloat()
    vector.push(numero)
}


function orden(vector){
    if(vector.length <=1){
        return vector
    }
    let menor = []
    let mayor = []
    let pivote = vector[0]

    for(let i = 1;i<vector.length;i++){
        if(vector[i]<pivote){
            menor.push(vector[i])
        }
        else{
            mayor.push(vector[i])
        }
    }
    return [...orden(menor),pivote,...orden(mayor)]

}


