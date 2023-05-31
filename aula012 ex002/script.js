function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var cxnas = document.getElementById('cxnas')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if (cxnas.value > ano){
        alert('ERRO verifique os dados e tente novamente')
    }else {
        var idade = ano-Number(cxnas.value)
        var sexo = document.getElementsByName('sexo')
        var gênero = ''
        if (sexo[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade <10){
                img.setAttribute('src', 'masc-1.jpeg')

            }else{
                img.setAttribute('src', 'masc-2.jpeg')
            }
        } else if (sexo[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade <10){
                img.setAttribute('src', 'fem-1.jpeg')

            }else{
                img.setAttribute('src', 'fem-2.jpeg')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }

}