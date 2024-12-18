const fetch = require('node-fetch');

async function fetchUser() {
    const url = 'https://reqres.in/api/users/2';
    try {
        const response = await fetch(url);
        const data = await response.json();
        //user data
        console.log('User Data:', data.data); 
    } catch (error) {
        console.log('Error fetching user:', error.message);
    }
}

fetchUser();
