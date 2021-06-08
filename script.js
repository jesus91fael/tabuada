function tabuada(){
    let numero = document.getElementById('txtnum')
    let resultado = document.getElementById('seltab')    
    if(numero.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(numero.value)
        resultado.innerHTML = ' '
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tab${c}`
            resultado.appendChild(item)
        }    
    }
}
   
