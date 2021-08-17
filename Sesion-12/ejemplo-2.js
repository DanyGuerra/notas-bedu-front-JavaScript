// const searchInput = document.getElementById('search');
// const searchButton = document.getElementById('button');

// const results = document.getElementById('results');

// searchButton.addEventListener('click', searchGIFs);

// function searchGIFs() {
//   const search = searchInput.value;

//   if(search) {
//     const formattedSearch = formatSearchString(search);
//     const url = buildUrl(formattedSearch);

//     return getGiphyResults(url)
//       .then(function(gifs) {
//         console.log(gifs)
//         gifs.forEach(function(gif) {
//           const img = document.createElement('img');
//           img.src = gif.images.fixed_height.url;
//           img.alt = gif.title;

//           results.appendChild(img)
//         })
//       })
//   }
// }

// function formatSearchString(search) {
//   return search.replace(/ /g, '+');
// }

// function buildUrl (search) {
//   const API_KEY = 'QE6STRK9Xh4qzZq8h0DrTIxxb3Z1E7t9'; // Provided by GIPHY
//   const baseUrl = 'http://api.giphy.com/v1/gifs/search';

//   return `${baseUrl}?q=${search}&api_key=${API_KEY}&limit=20`;
// }

// function getGiphyResults(url) {
//   return fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       return data.data
//     })
//     .catch(function(err) {
//       console.log(err)
//     })
// }



//Usando async await
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('button');

const results = document.getElementById('results');


const searchGIFs = async () => {
   const search = searchInput.value;

   if (search) {
      const formattedSearch = formatSearchString(search);
      const url = buildUrl(formattedSearch);

      const gifs = await getGiphyResults(url);
      console.log(gifs);
      gifs.forEach(function (gif) {
         const img = document.createElement('img');
         img.src = gif.images.fixed_height.url;
         img.alt = gif.title;
         results.appendChild(img);
      });
   }
}

searchButton.addEventListener('click', searchGIFs);


const formatSearchString = (search) => {
   return search.replace(/ /g, '+');
}

const buildUrl = (search) => {
   const API_KEY = 'QE6STRK9Xh4qzZq8h0DrTIxxb3Z1E7t9'; // Provided by GIPHY
   const baseUrl = 'http://api.giphy.com/v1/gifs/search';

   return `${baseUrl}?q=${search}&api_key=${API_KEY}&limit=9`;
}

const getGiphyResults = async (url) => {
   try {
      const response = await fetch(url);
      const data = await response.json();
      return data.data;
   } catch (err) {
      console.log(err);
   }
}