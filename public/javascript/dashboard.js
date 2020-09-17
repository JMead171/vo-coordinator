document.getElementById('messages').addEventListener('click', messageDetails);

async function messageDetails(event) {
    event.preventDefault();

    //find the one clicked and get the data attribute so we can call a post.
    const message = event.target;
    const msg_id = message.getAttribute("data-message");

    //console.log(msg_id); working
    document.location.replace('/message-details/', { msg_id, loggedIn: true })
}

async function sendMessageHandler(event) {
    event.preventDefault();

    const content = document.querySelector('textarea[name="msg-body"]').value.trim();

    const sendMsg = document.getElementById("dropDown");
    const sendRec = sendMsg.value;
    const receiver = Number(sendRec);
    const rnumber = receiver

    console.log("R: ", receiver);

    if (content)
        try {
            const response = await fetch('/api/messages', {
                method: 'POST',
                body: JSON.stringify({
                    content,
                    rnumber
                }),
                headers: { 'Content-Type': 'application/json' }
            });
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    //document.location.replace('/dashboard');
}

document.querySelector('#msg-form').addEventListener('click', sendMessageHandler);