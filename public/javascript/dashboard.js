document.getElementById('messages').addEventListener('click', messageDetails);

async function messageDetails(event){
    event.preventDefault();

    //find the one clicked and get the data attribute so we can call a post.
    const message = event.target;
    const msg_id = message.getAttribute("data-message");
    assign(msg_id);
    
    
    document.location.replace('/message-details/'+ msg_id, {loggedIn: true});
}

function assign (item){
    localStorage.setItem("message", item);
}