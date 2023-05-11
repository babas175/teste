const urlUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const cidade = document.getElementById("city");
const uf = document.getElementById("state");

uf.addEventListener('change', async function(){
    const urlCidades = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf.value}/municipios`;
    const request = await fetch(urlCidades);
    const response = await request.json();

    let options = '';
    response.forEach(element => {
        options += '<option>'+element.nome+'</option>';
    });
    cidade.innerHTML = options;
});

window.addEventListener('load', async ()=> {
    const request = await fetch(urlUF);
    const response = await request.json();

    const options = document.createElement("optgroup");
    options.setAttribute('label', 'UF');
    response.forEach(function(uf){
        options.innerHTML += '<option value="'+uf.sigla+'">'+uf.nome+'</option>';
    });
    uf.innerHTML = options.innerHTML;
});
