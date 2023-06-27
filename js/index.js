const userList = document.getElementById('user-list');
const repoList = document.getElementById('repos-list');
const form = document.querySelector('#github-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let username = e.target.search.value;
    console.log('Searching GitHub');


  fetch(`https://api.github.com/search/users?q=${username}`)
  .then(res => res.json())
  .then(data => {
    userList.innerHTML = '';
    repoList.innerHTML = '';

    data.items.forEach(user => {
        let h5 = document.createElement('h5');
        h5.innerText = user.login;

        let img = document.createElement('img');
        img.src = user.avatar_url;

        let link = document.createElement('a');
        link.href = user.html_url;
        link.innerText = 'Visit GitHub Account';

        h5.addEventListener('click', () => {
            fetch(`https://api.github.com/users/${user.login}/repos`)
              .then(res => res.json())
              .then(repos => {
                repoList.innerHTML = '';
                repos.forEach(repo => {
                  let repoItem = document.createElement('li');
                  repoItem.innerText = repo.name;
                  repoList.appendChild(repoItem);
                });
              });
          });
  
          let userContainer = document.createElement('div');
          userContainer.appendChild(h5);
          userContainer.appendChild(img);
          userContainer.appendChild(link);
          userList.appendChild(userContainer);
        });
      })
      .catch(error => {
        console.log('An error occurred:', error);
      });


