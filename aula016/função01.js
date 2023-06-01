function parimpar(n){
    if(n%2==0){
        return 'Par'
    } else {
        return 'Ímpar'
    }
}
var num = 89
console.log(`O número ${num} é ${parimpar(num)}`)