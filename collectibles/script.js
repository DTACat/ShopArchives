document.getElementById('fetchData').addEventListener('click', () => {
    const apiUrl = 'data/users.json';
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const dataContainer = document.getElementById('data');
            dataContainer.innerHTML = ''; // Clear any existing content
            
            data.forEach(user => {
                const userBox = document.createElement('div');
                userBox.className = 'user-box';
                
                const userName = document.createElement('h2');
                userName.textContent = user.name;
                
                const userEmail = document.createElement('p');
                userEmail.textContent = `Email: ${user.email}`;
                
                userBox.appendChild(userName);
                userBox.appendChild(userEmail);
                
                dataContainer.appendChild(userBox);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
