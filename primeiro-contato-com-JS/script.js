const botao = document.getElementById('botao-tema')

const salvarTema = localStorage.getItem('tema')

if (salvarTema === 'escuro'){
    document.body.classList.add('escuro')
    botao.textContent = "Modo Claro";
}

botao.addEventListener('click', () => {
    console.log("O Botão funcionou!");
    document.body.classList.toggle('escuro');

        if (document.body.classList.contains('escuro')) {
            botao.textContent = "Modo Claro";
            localStorage.setItem('tema', 'escuro')
        }
        else {
            botao.textContent = "Modo Escuro";
            localStorage.setItem('tema', 'claro')
        }
});

const inputUser = document.getElementById('user');
const botaoSalvar = document.getElementById('botao-salvar-usuario');
const tituloExibido = document.getElementById('titulo_usuario');

botaoSalvar.addEventListener('click', () => {
    const nome = inputUser.value;

    if (nome.trim() !== "") {

        tituloExibido.textContent = nome;

        localStorage.setItem('nomeSalvo', nome);
        
        inputUser.value = ""; 
    } else {
        alert("Por favor, digite um nome!");
    }
});

window.onload = () => {
    const nomeGuardado = localStorage.getItem('nomeSalvo');
    if (nomeGuardado) {
        tituloExibido.textContent = nomeGuardado;
    }
};