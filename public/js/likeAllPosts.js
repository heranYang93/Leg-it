import { makeRequest } from './helpers.js';

var elements = document.querySelectorAll('.like-post');
console.log(Array.from(elements));
//DOMContentLoaded - it fires when initial HTML document has been completely loaded
document.addEventListener('DOMContentLoaded', function () {
  // querySelector - it returns the element within the document that matches the specified selector
  Array.from(elements).forEach(function (element) {
    element.addEventListener('click', async (event) => {
      event.preventDefault();
      //   console.log(element.innerHTML);
      const id = element.getAttribute('post-id');
      try {
        const data = await makeRequest(`/api/like/${id}`, 'POST');
        // const element = document.getElementById('like-post');
        console.log(data);
        const likes = +element.children[1].getAttribute('data-value');
        console.log(likes, 'likes');
        if (data.like) {
          element.innerHTML = '';
          element.innerHTML = `<i class="fas fa-heart"></i><span class='likes-counter'
              data-value=${likes + 1}> ${likes + 1} likes</span>`;
        } else {
          element.innerHTML = '';
          element.innerHTML = `<i class="far fa-heart"></i><span class='likes-counter'
              data-value=${likes - 1}> ${likes - 1} likes</span>`;
        }
      } catch (error) {
        console.log('Failed to login', error);
      }
    });
  });
});
