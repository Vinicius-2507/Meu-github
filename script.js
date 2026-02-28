const elements = {
    botaoTema: document.getElementById('botao-tema'),
    form: document.getElementById('form-usuario'),
    inputUser: document.getElementById('user'),
    titulo: document.getElementById('titulo_usuario'),
    icon: document.querySelector('#botao-tema .icon'),
    btnText: document.querySelector('#botao-tema .text')
};

// Gerenciamento de Tema
const toggleTheme = (isEscuro = null) => {
    const active = isEscuro !== null ? isEscuro : document.body.classList.toggle('escuro');
    
    // Atualiza interface
    elements.icon.textContent = active ? "☀️" : "🌙";
    elements.btnText.textContent = active ? "Modo Claro" : "Modo Escuro";
    
    // Persistência
    localStorage.setItem('tema', active ? 'escuro' : 'claro');
    if (isEscuro !== null) document.body.classList.toggle('escuro', isEscuro);
};

// Carregamento Inicial
const init = () => {
    const savedTheme = localStorage.getItem('tema');
    const savedName = localStorage.getItem('nomeSalvo');

    if (savedTheme === 'escuro') toggleTheme(true);
    if (savedName) elements.titulo.textContent = savedName;
};

// Event Listeners
elements.botaoTema.addEventListener('click', () => toggleTheme());

elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = elements.inputUser.value.trim();

    if (nome) {
        // Efeito visual de troca
        elements.titulo.style.opacity = 0;
        
        setTimeout(() => {
            elements.titulo.textContent = nome;
            elements.titulo.style.opacity = 1;
            localStorage.setItem('nomeSalvo', nome);
        }, 200);

        elements.inputUser.value = "";
    }
});

init();
