function gerar() {
    var mult = window.document.getElementById('inum')
    var res = window.document.getElementById('res')



    if (mult.value.length == 0 || mult.value == 0){
        window.alert ('[Erro] Digite um numero valido')
    } else {
        res.innerHTML = `O resultado da tabuada do ${mult.value} é: <br>`
        var i = Number(mult.value)
        var r = Number(res.value)
    
        for(c = 1; c<=10; c++ ) {
            r = i * c

            res.innerHTML += `${i} X ${c} = ${r} <br>` 
        }

    }









}