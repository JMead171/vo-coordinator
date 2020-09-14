async function addUserHandler(event) {
    event.preventDefault();

    const first_name = document.querySelector('#user-first').value.trim();
    const last_name = document.querySelector('#user-last').value.trim();
    const phone = document.querySelector('#user-phone').value.trim();
    const email = document.querySelector('#user-email').value.trim();
    const title = document.querySelector('#user-title').value.trim();
    const username = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    const isManager = false;

    if (first_name && last_name && phone && email && title && username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                first_name,
                last_name,
                phone,
                email,
                title,
                username,
                password,
                isManager
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            document.location.replace('/newuser');
        }
    }
}

document.querySelector('.newuser-login').addEventListener('submit', addUserHandler);