    // Velocidade máxima de até 80KM/H.
    // A cada 5KM/H acima do limite, você ganha 1 ponto.
    // Caso pontos maior que 12 -> 'Carteira Supensa'.
    
    verificarVelocidade(90);
    function verificarVelocidade(velocidade){
        const velocidadeMaxima = 80;
        const kmhPorPonto = 5;
        if(velocidade <= velocidadeMaxima)
            console.log('Velocidade OK');
        else {
            const pontos = Math.floor((velocidade - velocidadeMaxima) /kmhPorPonto )
            if(pontos >= 12)
                console.log ('Carteira Suspensa');
            else
                console.log ('Pontos', pontos);
        }
    }