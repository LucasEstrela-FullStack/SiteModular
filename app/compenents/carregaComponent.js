function carregar(cmenu, ccarousel, cfooter){
    menu(cmenu)
    carrousel(ccarousel)
    footer(cfooter)
}

function menu(caminho){
    fetch(caminho)
    .then((reponse) => reponse.text())
    .then((html)=>{ 
        document.getElementById("menu").innerHTML = html;
        })
}

function carrousel(caminho){
    fetch(caminho)
    .then((reponse) => reponse.text())
    .then((html)=>{ 
        document.getElementById("carousel").innerHTML = html;
        })
}

function footer(caminho){
    fetch(caminho)
    .then((reponse) => reponse.text())
    .then((html)=>{ 
        document.getElementById("footer").innerHTML = html;
        })
}

