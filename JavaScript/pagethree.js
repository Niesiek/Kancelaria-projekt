fetch('./Text/czymsiezajmuje.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error('Błąd wczytywania pliku!');
        }
        return response.text();
    })
    .then(data => {
        const formattedData = data
            .replace(/([:,])/g, '$1<br>') 
            .replace(/([.!?])\s*(?=[A-Z])/g, '$1<br>');

        document.getElementById('tekst').innerHTML = `<p>${formattedData}</p>`;
    })
    .catch(error => {
        console.error('Wystąpił problem:', error);
    });
