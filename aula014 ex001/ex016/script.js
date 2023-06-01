function contar(){
    var res = document.getElementById('resultado')
    var strinicio = document.getElementById('cxinicio')
    var strfim = document.getElementById('cxfim')
    var strpasso = document.getElementById('cxpasso')

    var inicio = Number(strinicio.value)
    var fim = Number(strfim.value)
    var passo = Number(strpasso.value)

    if (inicio == 0 || fim == 0 || passo == 0) {
        resultado.innerHTML = `Impossível contar!!`
    }else {
        res.innerHTML = `<p>Contando:</p> `
        //Contagem progressiva
        if(inicio < fim){
            for (var cont = inicio; cont <= fim; cont+=passo){
                res.innerHTML += `${cont}\u{1F449}`
        }
        //Contagem regressiva
        }else {
            for (var cont = inicio; cont >= fim; cont-=passo)
                res.innerHTML += `${cont}\u{1F449}`
        }
    }
    res.innerHTML += `🚩`
}