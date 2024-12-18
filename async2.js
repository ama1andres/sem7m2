const fetch = require('node-fetch');

async function fetchUserWithError() {
    const url = 'https://reqres.in/api/users/23'; 
    try {
        const response = await fetch(url);
        if (response.status === 404) {
            console.log('Error: User not found');
            return;
        }
        const data = await response.json();
        console.log('User Data:', data.data);
    } catch (error) {
        console.log('Error:', error.message);
    }
}

fetchUserWithError();
