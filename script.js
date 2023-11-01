const apiKey = "0c44ac5153e909e6482e36bdd005315e";

function printDados(dados){
    document.querySelector(".nameCity").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC";
    document.querySelector(".weather").innerHTML = dados.weather[0].description;
    document.querySelector(".umid").innerHTML = "umidade " + dados.main.humidity + "%";
    document.querySelector(".imgPrev").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;

};

async function buscaCity(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`).then(resposta => resposta.json());
    printDados(dados);
};

function buscar() {
    const cidade = document.querySelector(".cidade").value; 
    buscaCity(cidade);
};

