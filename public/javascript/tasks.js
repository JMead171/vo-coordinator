async function addTaskHandler(event) {
    event.preventDefault();

    const content = document.querySelector('#newTask').value.trim();
    const isComplete = false;

    if (content) {
        const response = await fetch('/api/tasks', {
            method: 'post',
            body: JSON.stringify({
                content,
                isComplete
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

async function taskCompleteHandler(event) {

    let allTasks = document.querySelectorAll("#task");
    let taskArr = Array.from(allTasks)

    for (let i = 0; i < allTasks.length; i++) {
        if (taskArr[i].checked == true) {
            event.preventDefault();

            const idstr = taskArr[i].nextElementSibling.innerHTML;
            const id = parseInt(idstr);
            const isComplete = true;

            if (id) 
                try {
                const response = await fetch(`/api/tasks/${id}`, {
                    method: 'put',
                    body: JSON.stringify({
                        isComplete
                    }),
                    headers: { 'Content-Type': 'application/json' }
                });
                }catch(err){
                    console.log(err);
                    res.status(500).json(err);
                }
            }
        }
    document.location.replace('/dashboard');
}


async function deleteTaskHandler(event) {
    let allTasks = document.querySelectorAll("#task");
    let taskArr = Array.from(allTasks)

    for (let i = 0; i < allTasks.length; i++) {
        if (taskArr[i].checked == true) {
            event.preventDefault();
    
        const idstr = taskArr[i].nextElementSibling.innerHTML;
        const id = parseInt(idstr);

        if (id) 
            try {
            const response = await fetch(`/api/tasks/${id}`, {
                method: 'DELETE'
            });
            }catch(err){
                console.log(err);
                res.status(500).json(err);
            }
        }
    }
    document.location.replace('/dashboard');
}


document.querySelector('.add-task').addEventListener('click', addTaskHandler);
document.querySelector('.mark-complete').addEventListener('click', taskCompleteHandler);
document.querySelector('.delete-task').addEventListener('click', deleteTaskHandler);