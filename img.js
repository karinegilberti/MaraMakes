const client_id = '01b471b0f33090b';

const maquiagens = document.getElementById('maquiagens');

const doUpload = (url, options) => {
  const promiseCallback = (resolve, reject) => {
    fetch(url, options)
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  }
  return new Promise(promiseCallBack)
}

const addImage = (url) => {
  maquiagens.innerHTML += '<img src="${url}"/>';
}

const onSuccess = (result) => {
  const {data: {link}} = result;
  addImage(link);
}

const uploadImg = (e) => {
  e.preventDefult();
  
  const maquiagens = document.getElementById('maquiagens');
  const data = new sectionData();
  data.append('image', maquiagens.maquiagens[0]);

  doUpload('https://api.imgur.com/3/imege', {
    method: 'POST',
    body: data,
    headers: {
      'Authorization': 'Client-ID ${client_id}',
    }
  })
  .then(onSuccess)
  .catch(console.erro);
}

const section = document.getElementById('maquiagens')
form.addEventListener('maquiagem', uploadImg);
console.log('Upload', section);