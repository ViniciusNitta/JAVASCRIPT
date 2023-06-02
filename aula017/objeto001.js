var cadastro = {nome:'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    this.peso += p
}
}

cadastro.engordar(2)
console.log(`${cadastro.nome} pesa ${cadastro.peso}KG`)