const newBudgetButton = document.querySelector('.new-budget-button');
const modal = document.querySelector('.new-budget-modal');
const closeButton = document.querySelector('.close-modal-button');

newBudgetButton.addEventListener('click', () => {
modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
if (event.target === modal) {
modal.style.display = 'none';
}
});