// import { makeRequest } from './helpers.js';

const postBtn = document.querySelector('.btn-post');
// const input = document.querySelector('input[type=file]');

function readFile() {
  if (this.files && this.files[0]) {
    var FR = new FileReader();

    FR.addEventListener('load', function (e) {
      document.getElementById('img').src = e.target.result;
    });

    FR.readAsDataURL(this.files[0]);
  }
}

const handleSubmitFile = (e) => {
  e.preventDefault();
  // document.querySelector('.btn-post').addClass('is-loading');
  if (!document.querySelector('input[type=file]')['files'][0]) return;
  const reader = new FileReader();
  reader.readAsDataURL(document.querySelector('input[type=file]')['files'][0]);
  reader.onloadend = () => {
    uploadImage(reader.result);
  };
  reader.onerror = () => {
    console.error('AHHHHHHHH!!');
  };
  document
    .querySelector('.modal-background.upload')
    .classList.remove('is-active');
};

const uploadImage = async (base64EncodedImage) => {
  try {
    await fetch('/api/posts/upload', {
      method: 'POST',
      body: JSON.stringify({ data: base64EncodedImage }),
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
  }
};

document.getElementById('inp').addEventListener('change', readFile);
postBtn.addEventListener('click', handleSubmitFile);
