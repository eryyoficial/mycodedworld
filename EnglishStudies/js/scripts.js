const progressBar = document.getElementById('progress-bar');

// Calcula e atualiza a barra de progresso
function updateProgress() {
    const phases = [1, 2, 3, 4];
    let totalCompleted = 0;
    let totalWeeks = 0;
    
    phases.forEach(phase => {
        const checkboxes = document.querySelectorAll(`input[data-phase="${phase}"]`);
        totalWeeks += checkboxes.length;
        const completedWeeks = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
        totalCompleted += completedWeeks;
    });

    const progress = (totalCompleted / (totalWeeks * phases.length)) * 100;
    updateProgressBar(progress);
}

// Atualiza a barra de progresso com cores diferentes para cada fase
function updateProgressBar(percentage) {
    progressBar.style.width = `${percentage}%`;
    progressBar.setAttribute('aria-valuenow', percentage);
    progressBar.textContent = `${Math.round(percentage)}%`;
    
    if (percentage <= 25) {
        progressBar.classList.add('bg-danger');
        progressBar.classList.remove('bg-warning', 'bg-success');
    } else if (percentage <= 50) {
        progressBar.classList.add('bg-warning');
        progressBar.classList.remove('bg-danger', 'bg-success');
    } else {
        progressBar.classList.add('bg-success');
        progressBar.classList.remove('bg-danger', 'bg-warning');
    }
}

// Atualiza a barra de progresso quando o documento é carregado
document.addEventListener('DOMContentLoaded', updateProgress);
