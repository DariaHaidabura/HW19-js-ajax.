let selectedAlbum = document.querySelector('ul');
let selectedImages = document.getElementById('images');

async function getAlbums() {
  let albums = await fetch('https://jsonplaceholder.typicode.com/albums');
  let albumsArray = await albums.json();
  selectedAlbum.innerHTML = albumsArray.map(item => {
    let li = `<li><a href name=${item.id}><h4>album №${item.id}</a></h4>${item.title}</li>`;
    return li;
  }).join('')
}

async function showImages(id) {
  let images = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
  let imagesArray = await images.json();
  selectedImages.innerHTML = imagesArray.map(img => {
    let image = `<img src="${img.url}"></img>`;
    return image;
  }).join('')
}

getAlbums().then(() => showImages(1));

selectedAlbum.addEventListener('click', (e) =>  {
  e.preventDefault();
  e.stopPropagation();
  showImages(e.target.name) 
})