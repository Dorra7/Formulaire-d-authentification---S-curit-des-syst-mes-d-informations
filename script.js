
const contentMsg = document.getElementById('content-msg');
const inputsContainer = document.getElementById('inputs-container');
const loginForm = document.getElementById('loginForm');

// Bouton Reset 
function resetFields() {
    loginForm.reset();
    contentMsg.textContent = "";
    contentMsg.className = "";
}

// Bouton Valider
function validate() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === "admin" && pass === "1234") {
        contentMsg.textContent = "Vous êtes connecté";
        contentMsg.className = "success";
    } else {
        contentMsg.textContent = "Erreur. Recommencé";
        contentMsg.className = "error";
    }
}

// Bouton Ajout Compte
function addAccount() {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = 'Nouvel identifiant';
    newInput.style.marginTop = "5px";
    
    inputsContainer.appendChild(newInput);
    
    contentMsg.textContent = "Ajout d'un compte";
    contentMsg.className = "";
}