async function addTaskHandler(event) {
    event.preventDefault();

    console.log("Here in task.js...............................................................");
    const content = document.querySelector('#newTask').value.trim();
    const userid = req.session.user_id
    const isComplete = false;

    if (content) {
        const response = await fetch('/api/tasks', {
            method: 'post',
            body: JSON.stringify({
                content,
                isComplete,
                userid
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log("did i make it here?...............................................................");
        if (response.ok) {
            //document.location.replace('/dashboard');
        } else {
            // document.location.replace('/dashboard');
        }
    }
}

document.querySelector('.add-task').addEventListener('click', addTaskHandler);