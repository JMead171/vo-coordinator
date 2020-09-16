async function addTaskHandler(event) {
    event.preventDefault();

    const content = document.querySelector('#new-task').value.trim();
    const user_id = req.session.username
    const isComplete = false;

    if (content) {
        const response = await fetch('/api/tasks', {
            method: 'post',
            body: JSON.stringify({
                content,
                isComplete,
                user_id              
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            document.location.replace('/dashboard');
        }
    }
}

document.querySelector('.add-task').addEventListener('submit', addTaskHandler);