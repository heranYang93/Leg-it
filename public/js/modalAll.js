import { makeRequest, getRequest } from './helpers.js';
const modalTriggers = document.querySelectorAll('.modal-trigger.actions');
const actionsModal = document.querySelector('.actions-modal.actions');
const followBtn = document.querySelector('.follow-action');
const modalBg = document.querySelector('.modal-background.actions');
const deletePost = document.querySelector('.delete-post');

// This adds an event listener on h3 headers to fetch repo data

console.log(modalTriggers);

document.addEventListener('DOMContentLoaded', function () {
  // querySelector - it returns the element within the document that matches the specified selector
  Array.from(modalTriggers).forEach(function (element) {
    element.addEventListener('click', async (event) => {
      event.preventDefault();
      try {
        const id = element.getAttribute('user-id');
        const postId =
          element.parentElement.parentElement.parentElement.parentElement.id;

        console.log(postId, 'post-id');
        console.log(id, 'user-id');
        const getData = await getRequest(`/api/follow/${id}`);
        const getUser = await getRequest(`/api/users/user`);
        console.log(id, getUser.user, 'id');
        console.log(+id === +getUser.user);
        if (getData.follow) {
          followBtn.innerHTML = '';
          followBtn.innerHTML = 'Unfollow';
        } else {
          followBtn.innerHTML = '';
          followBtn.innerHTML = 'Follow';
        }
        if (+id === +getUser.user) {
          deletePost.classList.remove('is-hidden');
        }
        actionsModal.classList.add('is-active'); // modal status to active to enable the following event listener to exit modal screen on modal-background click

        modalBg.addEventListener('click', function () {
          actionsModal.classList.remove('is-active');
          deletePost.classList.add('is-hidden');
        });
        document
          .querySelector('.cancel.actions')
          .addEventListener('click', function () {
            actionsModal.classList.remove('is-active');
            deletePost.classList.add('is-hidden');
          });
        followBtn.addEventListener('click', async (event) => {
          event.preventDefault();
          try {
            const postData = await makeRequest(`/api/follow/${id}`, 'POST');
            console.log(postData);
            window.location.reload();
          } catch (error) {
            console.log('Failed to login', error);
          }
        });
        deletePost.addEventListener('click', async (event) => {
          event.preventDefault();
          try {
            const postData = await makeRequest(
              `/api/posts/${postId}`,
              'DELETE'
            );
            console.log(postData);
            window.location.reload();
          } catch (error) {
            console.log('Failed to login', error);
          }
        });
      } catch (error) {
        console.error(error);
      }
    });
  });
});