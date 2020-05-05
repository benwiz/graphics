const filenames = [
  'archery.png',
  'charmin-bears.png',
  'catseyes-2.png',
  'evileye.png',
  'concentric-grayscale.png',
  'mountains.png',
  'wedges.png',
];

document.addEventListener('DOMContentLoaded', () => {
  const imagesDiv = document.querySelector('#images');
  for (let i = 0; i < filenames.length; i++) {
    const filename = filenames[i];
    const imgHTML = `<img src="./images/${filename}" width="360" height="360"></img>`;
    imagesDiv.innerHTML += imgHTML;
  }
});
