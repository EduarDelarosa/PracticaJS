// XMLHttpRequest
(() => {
  const xhr = new XMLHttpRequest(),
  $xhr = document.getElementById('xhr'),
  $fragment = document.createDocumentFragment();

  
  xhr.addEventListener('readystatechange', (e) => {
    if(xhr.readyState !== 4) return;

    // console.log(xhr);
    if(xhr.status >= 200 && xhr.status < 300){
      // console.log('Exito');
      // console.log(xhr.responseText);
      let json = JSON.parse(xhr.responseText);
      // console.log(json);

      json.forEach(el => {
        const $li = document.createElement('li');
        $li.innerHTML = el.email;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    }else{
      console.log('Error');
      let message = xhr.statusText || 'Ocurrio un Error';
      $xhr.innerHTML = `Error: ${xhr.status} -- ${message}`;
    }
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.send();

})();

// API Fetch
(() =>{
  const $fetch = document.getElementById('fetch'),
  $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users").then(res => {
    // console.log(res);
    return res.ok ? res.json() : Promise.reject(res);
  }).then(json =>{
    // console.log(json);
    json.forEach(el => {
      const $li = document.createElement('li');
      $li.innerHTML = el.email;
      $fragment.appendChild($li);
    });

    $fetch.appendChild($fragment);
  }).catch(err => {
    // console.log('catch', err);
    let message = err.statusText || "Ocurrio un error";
    $fetch.innerHTML = `${err.status} - ${message}`;
  }).finally(() => {
    // console.log('Esto se ejecuta independientemente del resultado del fetch');
  });
})();

// API Fetch + Async-Await
(() => {
  const $fetchAsync = document.getElementById('fetch-async'),
  $fragment = document.createDocumentFragment();

  async function getData(){
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
      json = await res.json();
      // console.log(res, json);
      if(!res.ok) throw { status: res.status, statusText: res.statusText }

      json.forEach(el => {
        const $li = document.createElement('li');
        $li.innerHTML = el.email;
        $fragment.appendChild($li);
      });
  
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      // console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $fetchAsync.innerHTML = `${err.status} - ${message}`;
    }
  }

  getData();

})();

// Axios
(()=> {
  const $axios = document.getElementById('axios'),
  $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      // console.log(res.data)
      let json = res.data;

      json.forEach(el => {
        const $li = document.createElement('li');
        $li.innerHTML = el.email;
        $fragment.appendChild($li);
      });
  
      $axios.appendChild($fragment);

    })
    .catch((err) =>{
      console.log(err.response);
      let message = err.response.statusText || "Ocurrio un error";
      $axios.innerHTML = `${err.response.status} - ${message}`;
    })
    .finally();
})();

// Axios + Async-Await
(()=>{
  const $axiosAsync = document.getElementById('axios-async'),
  $fragment = document.createDocumentFragment();

    async function getData(){
      try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;
        // console.log(res, json);
        json.forEach(el => {
          const $li = document.createElement('li');
          $li.innerHTML = el.email;
          $fragment.appendChild($li);
        });
    
        $axiosAsync.appendChild($fragment);
      } catch (err) {
        console.log(err.response);
        let message = err.response.statusText || "Ocurrio un error";
        $axiosAsync.innerHTML = `${err.response.status} - ${message}`;
      }
    }

    getData();

})();