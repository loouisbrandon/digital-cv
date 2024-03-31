const modoNoturnoButton = document.getElementById('modo-noturno');
const body = document.body;

modoNoturnoButton.addEventListener('click', () => {
    body.classList.toggle('modo-noturno'); /* Adiciona ou remove a classe modo-noturno no body */
});