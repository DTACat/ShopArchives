document.getElementById('fetchData').addEventListener('click', () => {
    const apiUrl = 'data/users.json';
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('data').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error fetching data:', error));
});
