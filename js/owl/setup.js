$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function mudarSerie(elemento){
    var valor = elemento.value;
    var logo = document.getElementsByClassName("titulo");
    var sinopse = document.getElementsByClassName("descricao");
    var el = document.getElementById("conteudo-principal").style;
    var linkYT = document.getElementsByClassName("link-1");
    var linkWiki = document.getElementsByClassName("link-2");
    
    if(valor == 1){
        logo[0].src = "img/suits-logo.png"
        sinopse[0].innerHTML = "Mesmo sem se formar e sem licença para advogar, um jovem brilhante impressiona um importante advogado e consegue uma cobiçada posição em sua firma.";
        document.getElementById("conteudo-principal").style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('img/capa-suits.jpg')";
        linkYT[0].href = "https://www.youtube.com/watch?v=Ab2YIbP5xw8";
        linkWiki[0].href = "https://pt.wikipedia.org/wiki/Lista_de_epis%C3%B3dios_de_Suits";
    }

    if(valor == 2){
        logo[0].src = "img/demolidor-logo.png";
        sinopse[0].innerHTML = "Cego desde pequeno, Matt Murdock luta contra a injustiça durante o dia como advogado e à noite nas ruas de Hell’s Kitchen, Nova York.";
        document.getElementById("conteudo-principal").style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('img/capa-demolidor.jpg')";
        linkYT[0].href = "https://www.youtube.com/watch?v=OiTqYV4zCGw";
        linkWiki[0].href = "https://pt.wikipedia.org/wiki/Lista_de_epis%C3%B3dios_de_Daredevil";
    }
    
    if(valor == 3){
        logo[0].src = "img/jessica-jones-logo.png";
        sinopse[0].innerHTML = "Assombrada pelos traumas do passado, Jessica Jones usa seus poderes como detetive particular para encontrar e deter o perverso Kilgrave.";
        document.getElementById("conteudo-principal").style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('img/capa-jessica.jpg')";
        linkYT[0].href = "https://www.youtube.com/watch?v=nWHUjuJ8zxE";
        linkWiki[0].href = "https://pt.wikipedia.org/wiki/Jessica_Jones_(s%C3%A9rie_de_televis%C3%A3o)";
    }

    if(valor == 4){
        logo[0].src = "img/luke-cage-logo.png";
        sinopse[0].innerHTML = "Um ex-presidiário com pele indestrutível luta para limpar seu nome e salvar o bairro onde vive. Ele não queria confusão, mas a população precisava muito de um herói.";
        document.getElementById("conteudo-principal").style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('img/capa-luke.jpg')";
        linkYT[0].href = "https://www.youtube.com/watch?v=ORa4hPhGrpo";
        linkWiki[0].href = "https://pt.wikipedia.org/wiki/Luke_Cage_(s%C3%A9rie_de_televis%C3%A3o)";
    }

    if(valor == 5){
        logo[0].src = "img/punho-logo.png";
        sinopse[0].innerHTML = "Quinze anos depois de ter sido dado como morto, Danny Rand ressurge. Com a força do Punho de Ferro, ele espera recuperar seu passado e cumprir seu destino.";
        document.getElementById("conteudo-principal").style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('img/capa-punho.jpg')";
        linkYT[0].href = "https://www.youtube.com/watch?v=f9OKL5no-S0";
        linkWiki[0].href = "https://pt.wikipedia.org/wiki/Iron_Fist_(s%C3%A9rie_de_televis%C3%A3o)";
    }

    if(valor == 6){
        logo[0].src = "img/defensores-logo.png";
        sinopse[0].innerHTML = "Demolidor, Jessica Jones, Luke Cage e Punho de Ferro unem forças quando uma conspiração ameaça Nova York.";
        document.getElementById("conteudo-principal").style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('img/capa-defensores.jpg')";
        linkYT[0].href = "https://www.youtube.com/watch?v=jYvHxEEgrPA";
        linkWiki[0].href = "https://pt.wikipedia.org/wiki/Os_Defensores";
    }

    if(valor == 7){
        logo[0].src = "img/justiceiro-logo.png";
        sinopse[0].innerHTML = "O ex-marine Frank Castle só quer punir os criminosos responsáveis pela morte da sua família, mas torna-se alvo de uma conspiração militar.";
        document.getElementById("conteudo-principal").style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('img/capa-justiceiro.jpg')";
        linkYT[0].href = "https://www.youtube.com/watch?v=STuXgXcOVPE";
        linkWiki[0].href = "https://pt.wikipedia.org/wiki/The_Punisher_(s%C3%A9rie_de_televis%C3%A3o)";
    }

    if(valor == 8){
        logo[0].src = "img/homem-aranha-logo.png";
        sinopse[0].innerHTML = "Depois de atuar ao lado dos Vingadores, chegou a hora do pequeno Peter Parker (Tom Holland) voltar para casa e para a sua vida, já não mais tão normal. Lutando diariamente contra pequenos crimes nas redondezas, ele pensa ter encontrado a missão de sua vida quando o terrível vilão Abutre (Michael Keaton) surge amedrontando a cidade. O problema é que a tarefa não será tão fácil como ele imaginava.";
        document.getElementById("conteudo-principal").style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('img/capa-homem-aranha.jpg')";
        linkYT[0].href = "https://www.youtube.com/watch?v=39udgGPyYMg";
        linkWiki[0].href = "https://pt.wikipedia.org/wiki/Spider-Man:_Homecoming";
    }

    if(valor == 9){
        logo[0].src = "img/breaking-bad-logo.png";
        sinopse[0].innerHTML = "Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.";
        document.getElementById("conteudo-principal").style.backgroundImage = "linear-gradient(rgba(0,0,0,.20),rgba(0,0,0,.50)100%), url('img/capa-breaking.jpg')";
        linkYT[0].href = "https://www.youtube.com/watch?v=2gTC4uWP3_Y";
        linkWiki[0].href = "https://pt.wikipedia.org/wiki/Lista_de_epis%C3%B3dios_de_Breaking_Bad";
    }

    if(valor == 10){
        logo[0].src = "img/better-call-saul-logo.png";
        sinopse[0].innerHTML = "Antes de se transformar no infame Saul Goodman, o advogado de Breaking Bad era mais inocente, mas não era santo.";
        document.getElementById("conteudo-principal").style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('img/capa-better.jpg')";
        linkYT[0].href = "https://www.youtube.com/watch?v=cKAbNewo_Ho";
        linkWiki[0].href = "https://pt.wikipedia.org/wiki/Lista_de_epis%C3%B3dios_de_Better_Call_Saul";
    }
}


