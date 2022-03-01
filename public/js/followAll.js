import { makeRequest } from './helpers.js';

const followTexts = document.querySelectorAll('.username-within');
console.log(followTexts);

document.addEventListener('DOMContentLoaded', function () {
  // querySelector - it returns the element within the document that matches the specified selector
  Array.from(followTexts).forEach(function (element) {
    element.addEventListener('click', async (event) => {
      event.preventDefault();
      //   console.log(element.innerHTML);
      const id = element.parentElement.getAttribute('user-id');
      console.log(id);
      try {
        const data = await makeRequest(`/api/follow/${id}`, 'POST');
        console.log(data);
        window.location.reload();
      } catch (error) {
        console.log('Failed to login', error);
      }
    });
  });
});
