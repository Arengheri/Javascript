function contar() {
    var n1 = window.document.getElementById('iinicio')
    var n2 = window.document.getElementById('ifim')
    var passo = window.document.getElementById('ipasso')
    var resultado = window.document.getElementById('res')

    if (n1.value.length == 0 || n2.value.lenght == 0 || passo.value.lenght ==0){
        window.alert ('[Erro] Faltam dados')
    } else {
        resultado.innerHTML = 'Contando: '
        var i =Number(n1.value)
        var f =Number(n2.value)
        var p =Number(passo.value)
        var r =Number(resultado.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando Passo 1')
            p = 1
        }

        if (i < f){
           while (i <= f) {
            res.innerHTML += `${i} \u{1f449}`
            r = i + p
            i = r
        }  
        }else {
            while(i >= f) {
                res.innerHTML += `${i} \u{1f449}`
                r = i - p
                i =r
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
        
    }


    
    
}