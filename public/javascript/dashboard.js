document.getElementById('messages').addEventListener('click', messageDetails);

async function messageDetails(event){
    event.preventDefault();

    //find the one clicked and get the data attribute so we can call a post.
    const message = event.target;
    const msg_id = message.getAttribute("data-message");

    //console.log(msg_id); working
    document.location.replace('/message-details')
}