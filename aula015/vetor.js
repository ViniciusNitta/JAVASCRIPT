var valores = [4,6,7,6,2,5]

/*for (var pos=0; pos <valores.length; pos++){
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}*/
//Comandos para exibir o índice dos elementos do array

for (let pos in valores){ 
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
//Forma simplificada usando in para exibir os índices dos elementos do array


var num = 1
var pos = valores.indexOf(num)

if (pos == -1){
    console.log('O valor não foi encontrado.')
}else{
    console.log(`O valor ${num} no array está na posição ${pos}`)
}
//Comandos para encontrar determinado elemento dentro do array e exibir o seu índice.
