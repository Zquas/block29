

export default function NewPlayerForm(playerObj){
    async (playerObj) => {
    try {
        const response = await fetch(PLAYERS_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(playerObj)
        });
        const data= await response.json();

        return data;
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
    };
}