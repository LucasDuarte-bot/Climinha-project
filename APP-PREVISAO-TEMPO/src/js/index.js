const chaveDaApi =
    "155db832628b49498bb213409242702"

const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value;

    const dados = await buscarDadosDaCidade(cidade);

    preencherDadosNaTela(dados, cidade);
})

async function buscarDadosDaCidade(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt`

    const resposta = await fetch(apiUrl);

    if(resposta.status !== 200) return;

    const dados = resposta.json();

    return dados;
}

function preencherDadosNaTela(dados, cidade) {
    const temperatura = dados.current.temp_c;
    const condicao = dados.current.condition.text;
    const umidade = dados.current.humidity;
    const velocidadeDoVento = dados.current.wind_kph;
    const iconeCondicao = dados.current.condition.icon;

    document.getElementById("cidade").textContent = cidade;

    document.getElementById("temperatura").textContent = `${temperatura}°C`

    document.getElementById("condicao").textContent = condicao;

    document.getElementById("umidade").textcontent = `${umidade}%`;

    document.getElementById("velocidade-do-vento").textContent = `${velocidadeDoVento}km/h`;

    document.getElementById("icone-condicao").setAttribute("src", iconeCondicao)
}