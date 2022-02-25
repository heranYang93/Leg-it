import { makeRequest } from './helpers.js';

const followBtn = document.querySelector('.follow-action');
console.log(followBtn);
const handleFollowAction = async (event) => {
  event.preventDefault();
  const id = document.querySelector('.username').getAttribute('user-id');
  if (id) {
    try {
      const data = await makeRequest(`/api/follow/${id}`, 'POST');
      document.querySelector('.actions-modal').classList.remove('is-active');
      //   const element = document.getElementById('like-post');
      console.log(data);
      if (data.follow) {
        followBtn.innerHTML = '';
        followBtn.innerHTML = 'Unfollow';
      } else {
        followBtn.innerHTML = '';
        followBtn.innerHTML = 'Follow';
      }
    } catch (error) {
      console.log('Failed to login', error);
    }
  } else {
    console.log('Failed to login');
  }
};

followBtn.addEventListener('click', handleFollowAction);
