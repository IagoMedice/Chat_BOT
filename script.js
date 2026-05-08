const respostas = {
    "commit":  "O comando 'git commit -m \"mensagem\"' salva suas alterações no histórico local do repositório.",
    "push":    "O 'git push' envia seus commits locais para o repositório remoto (ex: GitHub).",
    "pull":    "O 'git pull' baixa e integra as alterações do repositório remoto no seu branch atual.",
    "clone":   "O 'git clone <url>' copia um repositório remoto para a sua máquina.",
    "branch":  "Branches são ramificações do projeto. Use 'git branch nome' para criar e 'git checkout nome' para trocar.",
    "merge":   "O 'git merge nome-do-branch' une as alterações de outro branch no branch atual.",
    "status":  "O 'git status' mostra quais arquivos foram modificados, adicionados ou estão prontos para commit.",
    "add":     "O 'git add .' adiciona todas as alterações à área de stage, preparando para o commit.",
    "log":     "O 'git log' exibe o histórico de commits do repositório.",
    "revert":  "O 'git revert <hash>' desfaz um commit criando um novo commit de reversão, sem apagar o histórico.",
};

// Mensagem de boas-vindas
displayMessage("bot", "Olá! Sou seu assistente Git 🤖 Pergunte sobre: commit, push, pull, clone, branch, merge, status, add, log ou revert.");

document.getElementById('send-button').addEventListener('click', enviar);

document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') enviar();
});

function enviar() {
    const input = document.getElementById('user-input');
    const mensagem = input.value.trim();
    if (!mensagem) return;

    displayMessage("user", mensagem);
    const resposta = getRespostaGit(mensagem.toLowerCase());
    displayMessage("bot", resposta);

    input.value = '';
}

function getRespostaGit(mensagem) {
    for (let termo in respostas) {
        if (mensagem.includes(termo)) {
            return respostas[termo];
        }
    }
    return "Não reconheci o comando. Tente perguntar sobre: commit, push, pull, clone, branch, merge, status, add, log ou revert.";
}

function displayMessage(tipo, texto) {
    const chatBox = document.getElementById('chat-box');
    const div = document.createElement('div');
    div.textContent = (tipo === "user" ? "Você: " : "Bot: ") + texto;
    div.className = tipo === "user" ? "msg-user" : "msg-bot";
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}