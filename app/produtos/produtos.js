function carregaPagina(caminho){
    fetch(caminho)
    .then((response) => response.text())
    .then((html)=>{
        document.getElementById("produtos").innerHTML = html;
    });
}