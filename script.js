const avanca = document.querySelectorAll('.btn-proximo');

avanca.ForEach(button => (
    button.addEventListenner("click", function(){
    const atual = document.querySelector('.ativo');
    const proximopasso = 'passo-' + this.getAttribute( "data-proximo");

     atual.classList.remove("ativo");
    })

))