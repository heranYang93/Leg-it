const actionsModal = document.querySelector('.actions-modal');
const modalTrigger = document.querySelector('.modal-trigger');
// const url = 'https://api.github.com/users/moedaaboul/repos';

// This adds an event listener on h3 headers to fetch repo data

console.log(actionsModal);
console.log(modalTrigger);

modalTrigger.addEventListener('click', function () {
  try {
    // const name = event.target.innerHTML;
    // const data = await fetchGithubRepo(url);
    // const contributors = await fetchCommit(name);
    // const contributions = contributors
    //   .filter((e) => e.login === 'moedaaboul')
    //   .map((e) => e.contributions)[0];
    // const repoRaw = data.filter((obj) => obj.name === name)[0];
    // const repo = {
    //   title: repoRaw.name,
    //   url: repoRaw.html_url,
    //   license: repoRaw.license.name,
    //   tags: repoRaw.topics,
    //   language: repoRaw.language,
    //   description: repoRaw.description,
    //   date: repoRaw.created_at,
    //   commits: contributions,
    // };
    // renderRepoData(repo); // after repos data is retrieved from fetch, individual repo info is rendered on screen through a modal
    actionsModal.classList.add('is-active'); // modal status to active to enable the following event listener to exit modal screen on modal-background click

    const modalBg = document.querySelector('.modal-background');
    modalBg.addEventListener('click', function () {
      actionsModal.classList.remove('is-active');
    });
  } catch (error) {
    console.error(error);
  }
});
