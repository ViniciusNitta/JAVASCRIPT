function carregar() {
    
var agora = new Date()
var hora = agora.getHours()
var texthora = document.getElementById('msg')
var img = document.getElementById('img')
msg.innerHTML = (`Agora são ${hora}h`)

if (hora < 12){
    document.body.style.backgroundColor = 'rgb(227, 224, 120)'
    img.style.backgroundImage = 'url(amanhecer.jpeg)'
} else if (hora <= 18){
    document.body.style.backgroundColor = 'rgb(227, 183, 79)'
    img.style.backgroundImage = 'url(entardecer.jpeg)'
} else {
    document.body.style.backgroundColor = 'rgb(90, 87, 79)'
    img.style.backgroundImage = 'url(anoitecer.jpeg)'
}
}
