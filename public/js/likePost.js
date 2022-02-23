import { makeRequest } from './helpers.js';

const likeBtn = document.querySelector('#like-post');
console.log(likeBtn);
const handleLikePost = async (event) => {
  event.preventDefault();
  const id = document.querySelector('.card').id;
  if (id) {
    try {
      const data = await makeRequest(`/api/like/${id}`, 'POST');
      console.log(data);
      const likes = +document
        .querySelector('.likes-counter')
        .getAttribute('data-value');
      console.log(likes, 'likes');
      if (data.like) {
        document.getElementById(
          'like-post'
        ).innerHTML = `<i class="fas fa-heart ml-2"></i><span class='likes-counter'
        data-value=${likes + 1}> ${likes + 1} likes</span>`;
      } else {
        document.getElementById(
          'like-post'
        ).innerHTML = `<i class="far fa-heart ml-2"></i><span class='likes-counter'
        data-value=${likes - 1}> ${likes - 1} likes</span>`;
      }
    } catch (error) {
      console.log('Failed to login', error);
    }
  } else {
    console.log('Failed to login');
  }
};

likeBtn.addEventListener('click', handleLikePost);
