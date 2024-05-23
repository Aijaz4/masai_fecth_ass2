// index.js
const container = document.getElementById('user-list');
const btn = document.getElementById('fetch-users');

btn.addEventListener('click', () => {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(list => {
            list.data.forEach(user => {
                const userCard = document.createElement('div');
                userCard.classList.add('user-card');
                userCard.innerHTML = `
                    <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
                    <p>${user.first_name} ${user.last_name}</p>
                    <p>Email: ${user.email}</p>
                `;
                container.appendChild(userCard);
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
});
