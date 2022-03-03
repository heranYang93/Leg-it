const closeBtnArr = document.querySelectorAll('#closeBtn');
const editBtnArr = document.querySelectorAll('#editBtn');
const deleteTagBtnArr = document.querySelectorAll('#deleteTagBtn');
const newTagBtnArr = document.querySelectorAll('#addNewTag');

let vistingPost;

const renderTags = async function (postId, tagAreaEl, tagArr) {
  tagAreaEl.innerHTML = '';
  tagArr.forEach((singleTag) => {
    const createNewDeleteTagBtn = document.createElement('button');
    createNewDeleteTagBtn.setAttribute('class', 'tag is-delete');
    createNewDeleteTagBtn.addEventListener('click', async (event) => {
      event.preventDefault;
      const thisTagId = singleTag.id;
      const deleteThisTag = await fetch('/api/tag/delete/', {
        method: 'DELETE',
        body: JSON.stringify({ tag_id: thisTagId, post_id: postId }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(deleteThisTag);
      const getAllTags = await fetch(`/api/tag/getPureTags/${postId}`, {
        method: 'GET',
      });
      const getAllTags_data = await getAllTags.json();
      const newTagArr = getAllTags_data.tagArr;
      await renderTags(postId, tagAreaEl, newTagArr);
    });

    const createNewDeleteTagSpan = document.createElement('span');
    createNewDeleteTagSpan.setAttribute('class', 'tag is-warning');
    createNewDeleteTagSpan.innerHTML = singleTag.title;

    const createWrappingDiv = document.createElement('div');
    createWrappingDiv.setAttribute('class', 'tags has-addons');

    createWrappingDiv.appendChild(createNewDeleteTagSpan);
    createWrappingDiv.appendChild(createNewDeleteTagBtn);

    tagAreaEl.append(createWrappingDiv);
  });
};

editBtnArr.forEach(async (singleEditBtn) => {
  singleEditBtn.addEventListener('click', async (evt) => {
    evt.preventDefault;
    const thisPostId = parseInt(singleEditBtn.value.trim());
    vistingPost = thisPostId;

    const modelElId = 'edit' + thisPostId;
    const tagAreaId = 'tagArea' + thisPostId;

    const modalEl = document.getElementById(modelElId);
    const tagAreaEl = document.getElementById(tagAreaId);

    modalEl.classList.add('is-active');

    const response = await fetch(`/api/tag/getPureTags/${thisPostId}`, {
      method: 'GET',
    });
    const data = await response.json();
    const tagArr = data.tagArr;

    await renderTags(thisPostId, tagAreaEl, tagArr);
  });
});

closeBtnArr.forEach((singleCloseBtn) => {
  singleCloseBtn.addEventListener('click', (evt) => {
    evt.preventDefault;
    const thisPostId = parseInt(singleCloseBtn.value.trim());
    vistingPost = null;
    const modelElId = 'edit' + thisPostId;
    const modalEl = document.getElementById(modelElId);
    modalEl.classList.remove('is-active');
    location.reload();
  });
});

newTagBtnArr.forEach((singleNewTagBtn) => {
  singleNewTagBtn.addEventListener('click', async (event) => {
    event.preventDefault;

    const thisPostId = parseInt(singleNewTagBtn.value);

    const tagAreaId = 'tagArea' + thisPostId;
    const tagAreaEl = document.getElementById(tagAreaId);
    const inputAreaId = 'newTagInput' + thisPostId;
    const inputValue = document.getElementById(inputAreaId).value;
    if (inputValue) {
      const goodTag = inputValue.match(/[A-z0-9]/g).join('');
      const createANewTag = await fetch('/api/tag/create/', {
        method: 'POST',
        body: JSON.stringify({ title: goodTag, post_id: thisPostId }),
        headers: { 'Content-Type': 'application/json' },
      });

      const fetchTagsAgain = await fetch(`/api/tag/getPureTags/${thisPostId}`, {
        method: 'GET',
      });
      const data = await fetchTagsAgain.json();
      const tagArr = data.tagArr;
      await renderTags(thisPostId, tagAreaEl, tagArr);
      document.getElementById(inputAreaId).setAttribute('value', '');
    } else {
      alert('please insert a valid tag');
    }
  });
});
