    const barraDePesquisa = document.querySelector('.pesquisar__input')
    const elementos = ['.pesquisar__input-teclado', '.pesquisar__btn']
    const botaoCategoria = document.querySelectorAll('.superior__item')

    barraDePesquisa.addEventListener("input", filtrarPesquisa)

    elementos.forEach(seletor => {
        const elemento = document.querySelector(seletor)
        forEach = elemento.addEventListener('click', () => {
            barraDePesquisa.focus()
        })
    })

    botaoCategoria.forEach((botao) => {
        let nomeCategoria = botao.getAttribute("name")
        botao.addEventListener('click', () => filtrarPorCategoria(nomeCategoria))
    })

    function filtrarPesquisa() {
        const videos = document.querySelectorAll('.videos__item')
        const valorFiltro = barraDePesquisa.value.toLowerCase()

        videos.forEach((video) => {
            const titulo = video.querySelector('.titulo-video').textContent.toLowerCase()
            // se o titulo do video incluir o valor do filtro, o video é exibido, caso contrário, ele é ocultado, Caso o valor do filtro seja vazio, todos os videos são exibidos
            video.style.display = valorFiltro ? titulo.includes(valorFiltro) ? 'block' : 'none' : 'block'
        })
    }

    function filtrarPorCategoria(filtro) {
        const videos = document.querySelectorAll('.videos__item')
        const valorFiltro = filtro.toLowerCase()

        videos.forEach((video) => {
            const categoria = video.querySelector(".categoria").textContent.toLowerCase()
            video.style.display = (!categoria.includes(valorFiltro) && valorFiltro != 'tudo') ? 'none' : 'block'
        })         
    }
