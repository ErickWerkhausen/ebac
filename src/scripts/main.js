AOS.init();

const dataDoEvento = new Date('july 23, 2024 00:00:00');
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {

    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteDoEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs =  1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteDoEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteDoEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteDoEvento % horaEmMs) / minutosEmMs);
    const segundoAteOEvento = Math.floor((distanciaAteDoEvento % minutosEmMs ) / 1000)
    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundoAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundoAteOEvento}s `

    if (distanciaAteDoEvento < 0) {
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = 'Envento espirado'
    } else {
        
    }
}, 1000)