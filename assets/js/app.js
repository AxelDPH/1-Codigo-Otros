const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//se agrefo punto
const $b = document.querySelector('.blog'); //se cambio # por un punto
const $l = document.querySelector('.location');

async function displayUser(username) { //se agrego la palabra async para que se pueda imprimir en la consola
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); //se agrego la constante data para que se pueda imprimir en la consola
  console.log(data);
  $n.textContent = `${data.name}`;//se corrigieron las comillas en los tres parrafos
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);