console.log('sending protocols loaded');
document.getElementById('sendMessage').addEventListener('click', send);

async function send(event) {

    //grab receiver id and message then erase message field
    let rec_id = parseInt(document.getElementById('names').value);
    let contents = document.getElementById('message-body').value.trim();
    document.getElementById('message-body').value = '';

    console.log(rec_id, typeof rec_id);
    console.log(contents);

    if (rec_id && contents) {
        try {
            const results = await fetch('/api/messages', {
                method: 'POST',
                body: JSON.stringify({
                    content: contents,
                    receiver_id: rec_id
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (results) {
                document.location.replace('/dashboard');
            }
        }
        catch (err) {
            console.log(err);

        }
    }

}