const uploadActionsModal = document.querySelector('.actions-modal.upload');
const uploadModalTrigger = document.querySelector('.modal-trigger.upload');

uploadModalTrigger.addEventListener('click', function () {
  try {
    uploadActionsModal.classList.add('is-active'); // modal status to active to enable the following event listener to exit modal screen on modal-background click

    const uploadModalBg = document.querySelector('.modal-background.upload');
    uploadModalBg.addEventListener('click', function () {
      uploadActionsModal.classList.remove('is-active');
    });
    document.querySelector('.cancel').addEventListener('click', function () {
      uploadActionsModal.classList.remove('is-active');
    });
    document.querySelector('.delete').addEventListener('click', function () {
      uploadActionsModal.classList.remove('is-active');
    });
  } catch (error) {
    console.error(error);
  }
});
