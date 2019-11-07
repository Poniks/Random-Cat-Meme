const img = document.querySelector('img');
const btn = document.querySelector('div');

//javascript, jQuery
let idGif;
var xhr = $.get("https://api.giphy.com/v1/gifs/random?tag=cat&api_key=dc6zaTOxFJmzC");

xhr.done(function(data) {
  console.log("success got data", data);
  console.log(data.data.id);
  idGif = data.data.id;
  img.src = `https://media.giphy.com/media/${idGif}/source.gif`
});

btn.addEventListener('click', () => {
  xhr = $.get("https://api.giphy.com/v1/gifs/random?tag=cat&api_key=dc6zaTOxFJmzC");

  xhr.done(function(data) {
    console.log("success got data", data);
    console.log(data.data.id);
    idGif = data.data.id;
    img.src = `https://media.giphy.com/media/${idGif}/source.gif`
  });
})
