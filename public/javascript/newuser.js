async function addUserHandler(event) {
    event.preventDefault();

    const first_name = document.querySelector('#user-first').value.trim();
    const last_name = document.querySelector('#user-last').value.trim();
    const phone = document.querySelector('#user-phone').value.trim();
    const email = document.querySelector('#user-email').value.trim();
    const title = document.querySelector('#user-title').value.trim();
    const username = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    let isManager = false;

    //lets the first person to signup be the manager. 
    try{
        let count = await fetch('/api/users', {
            method: 'GET'
        });
        let test = await count.text();
        let hope = JSON.parse(test);
        console.log(hope);
        if(!hope.length){
            console.log('no one here');
            isManager = true;
        }
    }catch(err){
        console.log(err);
    }


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
            document.location.replace('/dashboard', {loggedIn: true});
        } else {
            document.location.replace('/newuser');
        }
    }
}

document.querySelector('.newuser-login').addEventListener('submit', addUserHandler);