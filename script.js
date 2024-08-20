let count = 1
document.getElementById("radio1").checked = true
/*
setInterval(function(){
    nextImage()
}, 2000)
*/
function nextImage(){
    count++;
    if(count>6){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true
}

var indice = 0;

function move(direcao, element) {
    // Verifique se o parâmetro é um número válido, caso contrário, redefina para 0
    if (isNaN(indice) || indice === undefined) {
        indice = 0;
    }

    // Verificar se o elemento clicado é um ícone e ajustar para o elemento pai
    if (element.tagName.toLowerCase() === 'i') {
        element = element.parentNode;
    }

    // Encontrar o contêiner pai mais próximo com a classe 'container'
    const container = element.closest('#Produtos');
    
    // Encontrar todos os elementos '.muda_imagem' dentro do contêiner
    const allMudaImagem = container.querySelectorAll('.muda_imagem');
    
    // Encontrar o índice do elemento '.muda_imagem' que contém o elemento clicado
    const parentMudaImagem = element.closest('.muda_imagem');
    const index = Array.from(allMudaImagem).indexOf(parentMudaImagem);

    // Exibir o índice
    console.log("Índice do contêiner '.muda_imagem': " + index);

    // Ajustar o índice com base na direção
    if (direcao === 'esquerda') {
        indice -= 1;
    } else if (direcao === 'direita') {
        indice += 1;   
    }

    // Garantir que o índice não saia dos limites
    if (indice < 0) {
        indice = 0;
    } else if (indice > 2) {
        indice = 2;
    }

    // Encontrar todos os elementos '.primeira' dentro do contêiner
    const allPrimeira = container.querySelectorAll('.primeira');
    
    // Verificar se o índice está dentro dos limites
    if (index >= 0 && index < allPrimeira.length) {
        // Aplicar a margem com base no índice
        allPrimeira[index].style.marginLeft = "-" + indice + "00%";
        console.log("Valor final de índice:", indice);
    } else {
        console.error("Índice fora dos limites para a classe '.primeira'.");
    }
}




function Mostrar_paginas() {
    var hiddenPages = document.querySelectorAll('.pagination .hidden')
    var dots = document.querySelector('.pagination .dots')
    hiddenPages.forEach(function(page) {
        page.style.display = 'inline'
    });
    dots.style.display = 'none'
}


