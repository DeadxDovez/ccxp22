const dias = document.getElementById("dia");
const horas = document.getElementById("hora");
const minutos = document.getElementById("minuto");
const segundos = document.getElementById("segundo");

const lancamento = "17 oct 2023"

function countdown(){
    const datalancamento = new Date(lancamento);
    const hoje = new Date();
    const segundosTotais = (datalancamento - hoje)/1000;

    const finalDias = math.floor(segundosTotais / 60 / 60 / 24);
    const finalHoras = math.floor(segundosTotais / 60 / 60 ) % 24;
    const finalMinutos = math.floor(segundosTotais / 60 ) % 24;
    const finalSegundos = math.floor(segundosTotais) % 60;

    dias.innerHTML = `${finalDias}D`
    horas.innerHTML = formatoTempo (`${finalHoras}H`);
    minutos.innerHTML = formatoTempo (`${finalMinutos}M`);
    segundos.innerHTML = formatoTempo (`${finalSegundos}S`);
}
    

// function formatoTempo(tempo){
//     return tempo <=10? `${tempo}0` : tempo;
// }



countdown();
setInterval(countdown , 1000) 