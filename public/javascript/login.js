async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#user-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();


  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
       document.location.replace('/');
    }
  }
}

function newUserHandler(event) {
  document.location.replace('/newuser');
}

document.querySelector('.newUser').addEventListener('submit', newUserHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
