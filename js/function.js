$(document).ready(function() {
    $('.primeirainfo').popover({
        placement: 'bottom',
        trigger: 'hover',
        html: true,
        content: '<div class="openpopover"><img class="openpopover__img" src="assets/imposto.jpg" alt=""><p class="openpopover__title">Imposto de Renda</p><p>Também conhecido atualmente como o leão, se trata de um tributo federal sobre a renda (o quanto você ganha) e acompanha a sua evolução patrimonial. Todos os anos o Governo exige que trabalhadores do Brasil inteiro façam a declaração dos ganhos anuais para a Receita Federal.</p></div>'
    });
});

$(document).ready(function() {
    $('.segundainfo').popover({
        placement: 'bottom',
        trigger: 'hover',
        html: true,
        content: '<div class="openpopover"><img class="openpopover__img" src="assets/historia.jpeg" alt=""><p class="openpopover__title">100 Anos de História</p><p>O imposto atual foi instituído em 1922 por Artur Bernardes, com a proposta de financiar a saúde, educação e o desenvolvimento urbano, com taxas variando entre 8 e 20%, com as maiores sendo pagas pelos de remuneração mais alta.</p></div>'
    });
});
