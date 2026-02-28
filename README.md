Markdown
# 🎨 Personal Theme Picker

Uma aplicação web interativa e elegante que permite aos usuários personalizar sua experiência visual e de identificação. O projeto foca em persistência de dados local e transições suaves de interface.

---

## 🚀 Funcionalidades

* **Alternância de Tema:** Troca dinâmica entre *Modo Claro* e *Modo Escuro*.
* **Personalização de Nome:** Permite ao usuário definir como deseja ser chamado na interface.
* **Persistência de Dados:** Utiliza `localStorage` para salvar o tema escolhido e o nome do usuário, mantendo as preferências mesmo após recarregar a página.
* **Design Responsivo:** Interface adaptável para diferentes tamanhos de tela usando `clamp()` e Flexbox.
* **Feedback Visual:** Animações de entrada (*fadeIn*) e transições suaves de cores via variáveis CSS.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica e acessível.
* **CSS3:** Estilização avançada com Variáveis de Ambiente (`:root`), Animações e Design Responsivo.
* **JavaScript (ES6+):** Manipulação de DOM, gerenciamento de eventos e persistência local.

---

## 📦 Como usar o projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/vinicius250807/vinicius250807.git](https://github.com/vinicius250807/vinicius250807.git)
    ```

2.  **Abra o projeto:**
    Basta abrir o arquivo `index.html` em qualquer navegador moderno.

---

## 📂 Estrutura de Arquivos

```text
├── index.html      # Estrutura principal e elementos da interface
├── style.css       # Definições de cores (Light/Dark) e layouts
└── script.js       # Lógica de troca de tema e persistência local
🛠️ Próximos Passos (Roadmap)
[ ] Seleção de Cores: Permitir que o usuário escolha cores específicas além do Dark/Light Mode.

[ ] Efeitos Sonoros: Adicionar um feedback sonoro sutil (click) ao alternar o tema.

[ ] Avatar Personalizado: Possibilidade de carregar uma imagem ou escolher um ícone de perfil.

[ ] Dashboard Simples: Adicionar widgets de saudação baseados no horário do dia.

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Desenvolvido por Vinícius
