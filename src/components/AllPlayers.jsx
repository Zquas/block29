import { useState } from "react";

export default function AllPlayers({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handleClick() {
        try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2305-UNF-HY-WEB-PT/players',
            {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            }
        );
        const result = await response.json();
        setSuccessMessage(result.message);
        console.log(result);
        console.log(token);
        } catch (error) {
        setError(error.message);
        }
    }

    return (
        <div>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token!</button>
        </div>
    );
}