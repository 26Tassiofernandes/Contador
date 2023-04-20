// Pegando cada elemento por id:

var estados = ['diminuir', 'resetar', 'aumentar']
for (e in estados) {
    document.getElementById(`${estados[e]}`)
}


var msg = document.getElementById('msg_num')
var contador = 0 // Inicializando contador


// diminuir.addEventListener('click', function dim() {
//     if (contador >= 0 || contador <= 0) {
//         contador--;
//         msg.innerHTML = contador
//     }
    
// });


// Funcão diminuir:
function dim() {
    if (contador <= 0) {
        msg.style.color = 'red'
        contador--
        msg.innerHTML = contador
        
    } else if (contador >= 0) {
        contador--
        msg.innerHTML = contador

    } if (contador == 0) {
        msg.style.color = 'rgb(44, 44, 44)'
        msg.innerHTML = contador
    }

}

// resetar.addEventListener('click', function reset() {
//     // location.reload(); // Reiniciar a página... por enquanto é isso...
//     contador = 0
//     msg.innerHTML = contador
    
// });


// Função resetar:
function reset() {
    // location.reload(); // Reiniciar a página... por enquanto é isso...
    contador = 0
    msg.style.color = 'rgb(44, 44, 44)'
    msg.innerHTML = contador

}


// aumentar.addEventListener('click', function aumen() {
//     incremento++;
//     msg.innerHTML = incremento

// });


// Podemos usar uma function normal ao invés do addEventListener:
function aumen() {
    if (contador >= 0) {
        msg.style.color = 'green'
        contador++
        msg.innerHTML = contador

    } else if (contador <= 0) {
        contador++
        msg.innerHTML = contador

    } if (contador == 0) {
        msg.style.color = 'rgb(44, 44, 44)'
        msg.innerHTML = contador
    }

}
