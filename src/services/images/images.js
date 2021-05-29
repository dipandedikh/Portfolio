export const getImages = async() => {
  return new Promise((resolve, reject) => {
    fetch('https://picsum.photos/v2/list?page=1&limit=10')
      .then(response => response.json())
      .then(images => {
        resolve(images);
      })
      .catch(error => {
        reject(error);
      });
  });
}