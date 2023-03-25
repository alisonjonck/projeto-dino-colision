let esta_pulando = false

let contador = 0

let id_do_intervalo

let children_cache

id_do_intervalo = setInterval(() => {

    // console.log('O contador era:', contador)

    if (!children_cache) {
        children_cache = [...document.getElementById('div-pai-do-jogo').children]
    } else {
        const div = document.getElementById('div-pai-do-jogo')

        const para_remover = children_cache[contador]

        if (para_remover.id === 'dino') {
            // não faça nada
        } else {
            if (children_cache[contador+2] && children_cache[contador+2].id.startsWith('mountain')) {
                console.log('é uma montanha', children_cache[contador+2].id)
                if (!esta_pulando) {
                    console.log(' >>>>> bateuuuuu');

                    bateu()

                }
            }
            
            div.removeChild(para_remover)

            div.appendChild(para_remover)
        }

    }

    contador = contador + 1;


    if (contador >= 15) {
        contador = 0;
    }


}, 200)

function bateu() {
    const h1 = document.getElementsByTagName("h1")[0]
    
    h1.style = "display: block;"

    clearInterval(id_do_intervalo)
}

document.addEventListener('keydown', (evt) => {
    console.log('este é o evento quando pressiona algo', evt)

    if (evt.key === "ArrowUp") {
        const dino = document.getElementById("dino")
        dino.style = "top: 45px;"
        esta_pulando = true

        setTimeout(() => {
            dino.style = ""
            esta_pulando = false
        }, 2000)
    }
});


