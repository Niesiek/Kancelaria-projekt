fetch('./Text/O_kancelarii.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Błąd wczytywania pliku!');
                }
                return response.text();
         })
    .then(data => {
        document.getElementById('tekst').textContent = data;
    })
    .catch(error => {
        console.error('Wystąpił problem:', error);
    });


