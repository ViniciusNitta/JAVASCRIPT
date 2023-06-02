var cxnum = document.getElementById('cxnum')
var tabres = document.getElementById('tabres')
var res = document.getElementById('res')
var valores = []

function add(){
    if (cxnum.value <= 0 || cxnum.value > 100){
        alert('Valor Inválido, adicione um número entre 1 e 100!!')
    }else {
        var num = Number(cxnum.value)
        var ver = valores.indexOf(num)

        if (ver == -1){
            valores.push(num)
            var item = document.createElement('option')
            item.value = `res${num}`
            tabres.appendChild(item)
            item.text = `O valor ${num} foi adicionado`
            res.innerHTML = ''
        }else {
            alert('O valor já foi inserido')
        }
    }
}

function finalizar(){
    if (valores == ''){
        alert('Adicione um valor para continuar')
    }else {
        valores.sort(function(a , b){
            return a - b
        })

        var soma = 0 
        for(var pos in valores){
            soma += valores[pos]
        }

        media = soma / valores.length

        res.innerHTML = (`<p>No total foram adicionados ${valores.length} números. </p>`)
        res.innerHTML += (`<p> O maior dos  valores foi o ${valores[valores.length - 1]}.</p>`)
        res.innerHTML += (`<p> O menor dos  valores foi o ${valores[0]}.</p>`)
        res.innerHTML += (`<p> A soma dos  valores foi de ${soma}.</p>`)
        res.innerHTML += (`<p> A média dos  valores foi de ${media}.</p>`)
    }
}