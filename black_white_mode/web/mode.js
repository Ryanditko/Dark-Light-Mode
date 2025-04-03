const toggle = document.getElementById('toggle');
const body = document.body;

// Função para detectar preferência do sistema
function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Função para aplicar o tema
function applyTheme(theme) {
    body.classList.remove('dark', 'light', 'system');
    body.classList.add(theme);
    localStorage.setItem('theme', theme);
}

// Inicialização
const savedTheme = localStorage.getItem('theme') || 'system';
applyTheme(savedTheme);

// Listener para mudanças no sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (body.classList.contains('system')) {
        applyTheme('system');
    }
});

// Toggle entre os modos
toggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark') ? 'light' : 
                        body.classList.contains('light') ? 'system' : 'dark';
    applyTheme(currentTheme);
});

