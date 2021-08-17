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




































// const app = document.getElementById('app');

// getGithubUsers()
//   .then(function (data) {

//     console.log(data);

//     data.forEach(function (data) {
//       app.appendChild(createCard(data));
//     })
//   })

// function createCard(data) {
//   const card = document.createElement('div');
//   card.className = 'card';

//   const name = document.createElement('h2');
//   const nameText = document.createTextNode(data.login);

//   name.appendChild(nameText)

//   const link = document.createElement('a');
//   const linkText = document.createTextNode('GitHub');

//   link.appendChild(linkText);
//   link.href = data.html_url;
//   link.target = 'blank';
//   link.className = 'button';

//   const img = document.createElement('img');
//   img.src = data.avatar_url;
//   img.alt = data.login;

//   card.appendChild(img);
//   card.appendChild(name);
//   card.appendChild(link);

//   return card;
// }

// function getGithubUsers() {
//   return fetch('https://api.github.com/users')
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       return data.slice(0, 4)
//     })
// }
