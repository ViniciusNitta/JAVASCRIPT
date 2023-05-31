function calcular(){
    var strnum = document.getElementById('idnum')
    var resultado = document.getElementById('resultado')

    if (strnum.value.length == 0 ){
        alert('Por favor, digite um número!!')
    }else{
        resultado.innerHTML = ''
        var num = Number(strnum.value)
        for (var cont = 1; cont <= 25; cont++ ){
            var item = document.createElement('option')
            item.text = `${num}X${cont}=${num*cont}`
            resultado.appendChild(item)
            item.value = `res${cont}`
    }
    }

}