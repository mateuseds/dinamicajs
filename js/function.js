$(document).ready(function() {
    $('.primeirainfo').popover({
        placement: 'bottom',
        trigger: 'hover',
        html: true,
        content: '<div class="openpopover"><img class="openpopover__img" src="assets/imposto.jpg" alt=""><p class="openpopover__title">Imposto de Renda</p><p>Também conhecido atualmente como o leão, se trata de um tributo federal sobre a renda (o quanto você ganha) e acompanha a sua evolução patrimonial. Todos os anos o Governo exige que trabalhadores do Brasil inteiro façam a declaração dos ganhos anuais para a Receita Federal.</p></div>'
    });
    $('.segundainfo').popover({
        placement: 'bottom',
        trigger: 'hover',
        html: true,
        content: '<div class="openpopover"><img class="openpopover__img" src="assets/historia.jpeg" alt=""><p class="openpopover__title">100 Anos de História</p><p>O imposto atual foi instituído em 1922 por Artur Bernardes, com a proposta de financiar a saúde, educação e o desenvolvimento urbano, com taxas variando entre 8 e 20%, com as maiores sendo pagas pelos de remuneração mais alta.</p></div>'
    });
    $('.terceirainfo').popover({
        placement: 'bottom',
        trigger: 'hover',
        html: true,
        content: '<div class="openpopover"><img class="openpopover__img" src="assets/loa.jpg" alt=""><p class="openpopover__title">Lei Orçamentária</p><p>A lei orçamentária anual (LOA) é a planilha do orçamento estatal com a estimativa de receitas e fixação de despesas executadas ao longo do ano. De forma muito detalhada, o Estado apresenta o planejamento de pagamento com pessoal, aposentadoria e dos investimentos nas áreas de governo, como saúde e segurança.</p></div>'
    });
    $('.quartainfo').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: '<div class="openpopover"><img class="openpopover__img" src="assets/tabela.png" alt=""><p class="openpopover__title">Imposto de Renda Retido na Fonte</p></div>'
    });
    $('.quintainfo').popover({
        placement: 'top',
        trigger: 'hover',
        html: true,
        content: '<div class="openpopover"><img class="openpopover__img" src="assets/pucminas.jpg" alt=""><p class="openpopover__p">Pontifícia Universidade Católica de Minas Gerais</p></div>'
    });
    dinamicaModal();
    dinamicaReferencias();
});

function dinamicaModal() {
    const modalElement = document.getElementById("modal");
    const openModalElement = document.getElementById("openModal");
    const closeBtn = document.getElementById("closeModal");


    const mouseOver = () => {
        modalElement.classList.add("open");
    };

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("open");
    });


    openModalElement.addEventListener("mouseover", mouseOver);
};



function dinamicaReferencias() {
    const coll = document.getElementsByClassName("dinamicaCollapsedButton");
    let i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const conteudo = this.nextElementSibling;
            if (conteudo.style.display === "block") {
                conteudo.style.display = "none";
            } else {
                conteudo.style.display = "block";
            }
        });
    }
}
