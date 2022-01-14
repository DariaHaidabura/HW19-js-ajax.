let selectedAlbum = document.querySelector('ul');
let selectedImages = document.getElementById('images');

async function getAlbums() {
  let albums = await fetch('https://jsonplaceholder.typicode.com/albums');
  return albumsArray = await albums.json();
}

function showAlbums(albumsArr) {
  selectedAlbum.innerHTML = albumsArr.map(item => {
    let li = `<li><a href name=${item.id}><h4>album №${item.id}</a></h4>${item.title}</li>`;
    return li;
  }).join('');
}

async function getImages(id) {
  let images = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
  return imagesArray = await images.json();
}

function showImages(imagesArr) {
  selectedImages.innerHTML = imagesArr.map(img => {
    let image = `<img src="${img.url}"></img>`;
    return image;
  }).join('');
}

getAlbums().then((albumsArr) => showAlbums(albumsArr));
getImages(1).then((imagesArr) => showImages(imagesArr));

selectedAlbum.addEventListener('click', (e) =>  {
  e.preventDefault();
  e.stopPropagation();
  getImages(e.target.name).then((imagesArr) => showImages(imagesArr));
})


