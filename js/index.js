const userList = document.getElementById('user-list');
const repoList = document.getElementById('repos-list');
const form = document.querySelector('#github-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let username = e.target.search.value;
    console.log('Searching GitHub');