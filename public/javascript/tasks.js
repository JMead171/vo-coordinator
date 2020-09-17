async function addTaskHandler(event) {
    event.preventDefault();

    const content = document.querySelector('#newTask').value.trim();
    //const userid = document.getElementById('userspan')
    const isComplete = false;

    //console.log("Display fields:  " , content, "  :  " , userid)

    if (content) {
        const response = await fetch('/api/tasks', {
            method: 'post',
            body: JSON.stringify({
                content,
                isComplete
                //userid
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
    let checkBox = document.getElementById("task");
    if (checkBox.checked  == true) {
        event.preventDefault();

        console.log("Update in task.js..........................................", );
        //const content = document.querySelector('#newTask').value.trim();
        //const userid = document.querySelector('#userspan');
        const idstr = document.getElementById('idspan').innerHTML;
        const id = parseInt(idstr);
        const isComplete = true;

        //console.log("Display Content= " , content, "User id= " , userid, "ID= ", id)

        if (id) {
            const response = await fetch(`/api/tasks/${id}`, {
                method: 'put',
                body: JSON.stringify({
                isComplete
            }),
                headers: { 'Content-Type': 'application/json' }
            });
            console.log("did i make it here?...............................................................");
            if (response.ok) {
                //document.location.replace('/dashboard');
            } else {
                //document.location.replace('/dashboard');
            }
        }
    }
}


async function deleteTaskHandler(event) {
    let checkBox = document.getElementById("task");
    if(checkBox.checked == true) {
        event.preventDefault();

        const idstr = document.getElementById('idspan').innerHTML;
        const id = parseInt(idstr);

        if (id) {
            const response = await fetch(`/api/tasks/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                document.location.replace('/dashboard');
            }
        }
    }
}


document.querySelector('.add-task').addEventListener('click', addTaskHandler);
document.querySelector('.mark-complete').addEventListener('click', taskCompleteHandler);
document.querySelector('.delete-task').addEventListener('click', deleteTaskHandler);