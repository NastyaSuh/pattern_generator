export function postData(data: string, apiURL: string): void
{
    // http://127.0.0.1:8000/generate

    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }

    fetch(apiURL, requestOptions)
    .then(response => {
        if(!response)
            {
                throw new Error("Network response is bad");
            }
        return response.json
    })
    .then(data => {console.log(data)})
    .catch(console.error);
}