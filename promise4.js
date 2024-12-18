const fetch = require('node-fetch');

//  datos de un usuario
fetch('https://reqres.in/api/users/2')
    .then(response => response.json())
    .then(data => {
        console.log('User:', data.data.first_name, data.data.last_name);
    })
    .catch(error => console.log('Error:', error));
