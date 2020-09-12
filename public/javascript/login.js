async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    //console.log("login  1: ", username, password);

    if (username && password) {
      //console.log("login: ", username, password);
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response);
      if (response.ok) {
          console.log("OK........");
          document.location.replace('/dashboard');
      } else {
          console.log("NOT OK...............");
          document.location.replace('/');
          }
  }
}
 
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);