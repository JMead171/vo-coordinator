

async function addResponse(){
 
    //get values of text box.
    let content = document.getElementById('text-body').value.trim();
    document.getElementById('text-body').value = '';

    let msg = localStorage.getItem("message");
  
    
    try{
        const message = await fetch('/api/messages/single/' + msg , {
            method: 'get',
            headers: {headers: {'Content-Type': 'application/json'}}
        });

        let raw = await message.text();
        let messageData = JSON.parse(raw);

        const sender_id = messageData.sender_id;
        const receiver_id = messageData.receiver_id;
        const message_id = messageData.id;

        if(content){
            const results = await fetch('/api/responses', {
                method: 'POST',
                body: JSON.stringify({
                    content,
                    sender_id,
                    receiver_id,
                    message_id 
                }),
                headers: {'Content-Type': 'application/json'}
            });

            console.log(results);
            let msgContent = messageData.content;
            let msgSender = parseInt(messageData.receiver_id);
            let msgReciever = parseInt(messageData.sender_id);

            const switcharoo = await fetch(`/api/messages/${msg}`, {
                method: 'PUT',
                body: JSON.stringify({
                    content: msgContent,
                    sender_id: msgSender,
                    receiver_id: msgReciever
                }),
                headers: {'Content-Type': 'application/json'} 
            });

            let chutes = await switcharoo.text();
            let ladders = JSON.parse(chutes);

            console.log(ladders);

            document.location.replace('/dashboard');

        }
    }catch(err){
        console.log(err);
        res.status(500).JSON(err);
    }





}


const responseAdder = document.getElementById('response-btn').addEventListener('click', addResponse);

