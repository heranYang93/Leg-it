import { makeRequest } from './helpers.js';

const likeBtn = document.querySelector('#like-post');

const handleLikePost = async (event) => {
  event.preventDefault();

  const id = document.querySelector('.card').id;
  if (id) {
    try {
      const data = await makeRequest(`/api/like/${id}`, 'POST');
      console.log(data);
      if (data.success) {
        window.location.reload();
      } else {
        console.log('Failed to login');
      }
    } catch (error) {
      console.log('Failed to login', error);
    }
  } else {
    console.log('Failed to login');
  }
};

likeBtn.addEventListener('click', handleLikePost);
