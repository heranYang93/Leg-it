const actionsModal = document.querySelector('.actions-modal');
const modalTrigger = document.querySelector('.modal-trigger');

// This adds an event listener on h3 headers to fetch repo data

console.log(actionsModal);
console.log(modalTrigger);

modalTrigger.addEventListener('click', function () {
  try {
    actionsModal.classList.add('is-active'); // modal status to active to enable the following event listener to exit modal screen on modal-background click

    const modalBg = document.querySelector('.modal-background');
    modalBg.addEventListener('click', function () {
      actionsModal.classList.remove('is-active');
    });
    document.querySelector('.cancel').addEventListener('click', function () {
      actionsModal.classList.remove('is-active');
    });
  } catch (error) {
    console.error(error);
  }
});
