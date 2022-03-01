const modalEl = document.getElementById('postEditingModal');
const editBtn = document.getElementById('editBtn');
const closeBtn = document.getElementById('closeBtn');
const saveBtn = document.getElementById('saveBtn');
const deleteTagBtnArr = document.querySelectorAll('#deleteTagBtn');

// const thisPostId = modalEl.value;
console.log(deleteTagBtnArr);

editBtn.addEventListener('click', (evt) => {
  evt.preventDefault;
  modalEl.classList.add('is-active');
});

closeBtn.addEventListener('click', (evt) => {
  evt.preventDefault;
  modalEl.classList.remove('is-active');
});
