let numero = document.getElementById('txtnum')
let adicionado = document.getElementById('seltab') 
let resultado = document.getElementById('res') 
let lista = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value, lista)){
        lista.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        //item.value = `tab${c}`
        adicionado.appendChild(item)
        ///resultado.innerHTML = ''
        
    }else{
        window.alert('Valor inválido ou já se encontra na lista!')
    }
    numero.value = ''
    numero.focus()
}

function finaliza(){

    if(lista.length == 0){
        window.alert('Adiciona valores antes de finalizar!')
    }else{
        let tot = lista.length
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        let media = 0
        for(let pos in lista){
            soma += lista[pos]
            if(lista[pos] > maior){
                maior = lista[pos]
            }else if(lista[pos] < menor){
                menor = lista[pos]
            }
        }
        media = soma / tot

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p>A média ds valores digitados é ${media}.</p>`
    }
}
   
