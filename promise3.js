function delayedWord(word, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(word);
        }, delay);
    });
}

// Lista de palabras con tiempos
const words = [
    delayedWord('very', 4000),
    delayedWord('dogs', 1000),
    delayedWord('cute', 3000),
    delayedWord('are', 2000)
];

Promise.all(words)
    .then(results => {
        console.log(`Sentence: Dogs are ${results.join(' ')}`);
    })
    .catch(error => console.log('Error:', error));
