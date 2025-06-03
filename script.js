function adicionar(valor) {
    const visor = document.getElementById('visor');
    if (valor === '.' && visor.value.includes('.')) {
        return;
    }
    visor.value += valor;
}


function limpar() {
    document.getElementById('visor').value = '';
}


function apagar() {
    var visor = document.getElementById('visor');
    visor.value = visor.value.slice(0, -1);
}


function calcular() {
    const visor = document.getElementById('visor');
    let expressao = visor.value;

    try {
        expressao = expressao.replace(/(\d+(\.\d+)?)%/g, (match, p1) => {
            const numero = parseFloat(p1);
            if (expressao.includes('+') || expressao.includes('-')) {
                const partes = expressao.split(/(\+|-)/);
                const ultimoNumero = parseFloat(parts[parts.length - 1 - 1]); // 
                return `(${ultimoNumero} * ${numero / 100})`;
            } else {
                
                return `(${numero / 100})`;
            }
        });

        visor.value = new Function('return ' + expressao)();

    } catch (error) {
        visor.value = 'Erro';
    }
}