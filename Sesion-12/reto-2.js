const app = document.getElementById('app');

const getGithubUsers = async () =>{
  let users = await fetch('https://api.github.com/users')
  users = await users.json()
  return users.slice(0, 4)
}

(async () =>{
  const users = await getGithubUsers()
  users.forEach(function (data) {
    createCard(data);
  })
})()

function createCard(data) {

  app.innerHTML += `<div class="card">
    <img src="${data.avatar_url}" alt="${data.login}">
    <h2>${data.login}</h2>
    <a href="${data.html_url}" target="blank" class="button">GitHub</a>
  </div>`

}
